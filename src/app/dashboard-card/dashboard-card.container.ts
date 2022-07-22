import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  template: ``,
})
export class DashboardCardContainer {
  @Input() item: Item;
  @Input() settings: any;
}
