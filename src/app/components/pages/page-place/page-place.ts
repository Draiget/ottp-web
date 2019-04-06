import {Component, Directive, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader, FileLikeObject, FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {MLDataModel} from '../../../data/ml/MLDataModel';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {BackendURL} from '../../../../environments/constants';

@Component({
  templateUrl: './page-place.html',
  styleUrls: ['./page-place.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PagePlaceComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: BackendURL + 'upload/',
    autoUpload: true,
    allowedFileType: ['image'],
    method: 'POST',
  });

  placeAdUrl: string = URL + 'place/';

  public isPreviewImg = false;
  public isUploading = false;
  public isUploadDone = false;
  public isEditDone = false;
  public isUploadError: any = null;
  public serverData: MLDataModel;
  public imgData: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
    this.uploader.onSuccessItem = this.onSuccessItem.bind(this);
    this.uploader.onErrorItem = this.onErrorItem.bind(this);
    this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
  }

  public onAfterAddingFile(item: FileItem) {
    item.withCredentials = false;
    this.setPreview(item);
  }

  public setPreview(file) {
    file.withCredentials = false;
    let fr = null;
    fr = new FileReader();
    fr.onload = () => {
      this.imgData = fr.result;
    }
    fr.readAsDataURL(file._file);
  }

  tryReUpload() {
    this.isUploading = false;
    this.isUploadDone = false;
    this.isUploadError = null;
  }

  onBeforeUploadItem(fileItem) {
    this.isUploading = true;
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.isUploadDone = true;
    this.isUploading = false;
    const data = JSON.parse(response);
    if (data.error) {
      console.error(data);
      this.isUploadError = { error: data.message };
      return;
    }
    this.serverData = new MLDataModel(data)
    console.log('OnSuccess', this.serverData);
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.isUploadDone = true;
    this.isUploading = false;
    if (response === undefined || response.length <= 0) {
      this.isUploadError = { error: 'Unknown server error' };
      return;
    }
    this.isUploadError = JSON.parse(response);
    console.error('OnError', this.isUploadError);
  }

  triggerImgPreview() {
    this.isPreviewImg = !this.isPreviewImg;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.http.post(BackendURL + 'place/', form.value).subscribe(value => {
      if (value['error'] !== undefined && value['error']) {
        console.error(value['message']);
        return;
      }
      this.isEditDone = true;
      console.log(value);
    });
  }
}
