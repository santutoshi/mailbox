import { Component } from '@angular/core';
import { MenuItem, MENU_ITEMS } from '../../data-access/models/nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  /** list of menu items */
  navMenuItems: Array<MenuItem> = MENU_ITEMS;
}
