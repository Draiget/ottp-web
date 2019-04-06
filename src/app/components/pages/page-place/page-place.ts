import {Component, Directive, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader, FileLikeObject, FileUploaderOptions, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {MLDataModel} from '../../../data/ml/MLDataModel';

const URL = 'http://localhost:8756/api/upload/';

@Component({
  templateUrl: './page-place.html',
  styleUrls: ['./page-place.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PagePlaceComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    autoUpload: true,
    allowedFileType: ['image'],
    method: 'POST',
  });

  public isUploading = false;
  public isUploadDone = false;
  public isUploadError: any = null;
  public serverData: MLDataModel;
  public imgData: any;

  constructor(private router: Router) { }

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

  onBeforeUploadItem(fileItem) {
    this.isUploading = true;
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.isUploadDone = true;
    const data = JSON.parse(response);
    this.serverData = new MLDataModel(data)
    console.log('OnSuccess', this.serverData);
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.isUploadDone = true;
    if (response === undefined) {
      this.isUploadError = { error: 'Unknown server error' };
      return;
    }
    this.isUploadError = JSON.parse(response);
    console.log('OnError', this.isUploadError);
  }
}
