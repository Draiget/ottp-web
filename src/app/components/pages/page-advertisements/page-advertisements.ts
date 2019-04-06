import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './page-advertisements.html',
  styleUrls: ['./page-advertisements.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageAdvertisementsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
