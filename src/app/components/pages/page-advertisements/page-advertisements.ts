import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BackendURL} from '../../../../environments/constants';
import {MLDataModel} from '../../../data/ml/MLDataModel';

@Component({
  templateUrl: './page-advertisements.html',
  styleUrls: ['./page-advertisements.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageAdvertisementsComponent implements OnInit {
  public advList: MLDataModel[];

  dataReceived = false;
  dataReceivedError: any = null;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(BackendURL + 'list/').subscribe(value => {
      this.dataReceived = true;
      if (value['error'] !== undefined && value['error']) {
        console.error('Error while receiving list of advertisements', value);
        this.dataReceivedError = value['message'];
        return;
      }
      if (value['body']) {
        this.advList = [];
        for (const res of value['body']) {
          console.log('res', res);
          this.advList.push(new MLDataModel({ body: res }));
        }
        console.log(this.advList);
        return;
      }
      this.dataReceivedError = 'Unknown behaviour';
      console.log(value);
    }, (e: HttpErrorResponse) => {
      console.error('Get request failed', e);
      this.dataReceived = true;
      this.dataReceivedError = e.message;
    });
  }

  getImgLink(id: string) {
    return BackendURL + 'img/?id=' + id;
  }
}
