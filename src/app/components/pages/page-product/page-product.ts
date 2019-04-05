import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './page-product.html',
  styleUrls: ['./page-product.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class PageProductComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }
}
