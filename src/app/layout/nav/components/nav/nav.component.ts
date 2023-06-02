import { Component } from '@angular/core';
import { CalculationService } from 'src/app/worker/calculation.service';
import { NUMBER } from 'src/app/worker/num.enum';
import { MenuItem, MENU_ITEMS } from '../../data-access/models/nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  /** list of menu items */
  navMenuItems: Array<MenuItem> = MENU_ITEMS;

  /**User Details */
  userDetails = {
    name: 'Santosh Thapa',
    email: 'santosh@mailbox.com',
    h1Color: '#1FB5EB',
  };

  constructor(private calculationService: CalculationService) {}
}
