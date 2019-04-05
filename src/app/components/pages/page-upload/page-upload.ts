import {Component, Directive, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader, FileLikeObject, FileUploaderOptions} from 'ng2-file-upload';

const URL = 'https://ml.zontwelg.com/upload/';

@Component({
  templateUrl: './page-upload.html',
  styleUrls: ['./page-upload.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    autoUpload: true,
    allowedFileType: ['image']
  });
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor(private router: Router) { }

  fileObject: any;

  ngOnInit() {
    this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
  }

  public onFileSelected(event) {
    console.log('File selected');
  }

  public onAfterAddingFile(fileItem) {
    console.log('AFTER');
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
