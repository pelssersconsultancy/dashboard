import { Component, Input, Type } from '@angular/core';
import { Item } from '../models/item';
import { dashboardCardsRegistry } from '../dashboard-cards-registry';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  @Input() item: Item;

  mapToComponent(component: string): Type<any> {
    return dashboardCardsRegistry[component];
  }
}
