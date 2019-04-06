import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './page-main.html',
  styleUrls: ['./page-main.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageMainComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
