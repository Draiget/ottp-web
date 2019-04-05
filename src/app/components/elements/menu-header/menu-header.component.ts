import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UiMenuElement} from '../../../data/ui/UiMenuElement';

@Component({
  selector: 'app-header-main-menu',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderMainMenuComponent implements OnInit {

  public menuItems: UiMenuElement[];
  public MenuToggleStatus: boolean;

  ngOnInit() {
    this.menuItems = [
      new UiMenuElement('Upload', 'upload'),
    ];
  }

  toggleMainMenu() {
    this.MenuToggleStatus = !this.MenuToggleStatus;
  }

  hideMainMenu() {
    this.MenuToggleStatus = false;
  }
}
