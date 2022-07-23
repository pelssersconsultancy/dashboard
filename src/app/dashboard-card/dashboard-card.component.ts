import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import { Item } from '../models/item';
import { dashboardCardsRegistry } from '../dashboard-cards-registry';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent {
  dynamicItem: Item;

  loading$ = new BehaviorSubject<boolean>( false );

  constructor() {
    console.log('dashboard card created');
  }

  @Input() set item(value: Item) {
    const that = this;
    this.dynamicItem = {
      ...value,
      outputs: {
        loading: (isLoading: boolean) => {
          console.log(
            `********** ${this.dynamicItem.component} is loading: ${isLoading}`
          );
          that.loading$.next( isLoading );
        },
        clicked: () => console.log('you clicked a button'),
      },
    };
  }

  mapToComponent(component: string): Type<any> {
    return dashboardCardsRegistry[component];
  }
}
