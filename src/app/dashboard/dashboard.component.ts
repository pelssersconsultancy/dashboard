import {
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';
import { dashboardCards } from '../dashboard-cards';
import { DashboardOutletDirective } from '../directives/dashboard-outlet.directive';
import { Item } from '../models/item';
import { Track } from '../models/track';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChildren(DashboardOutletDirective)
  dashboardOutlet: QueryList<DashboardOutletDirective>;

  tracks: Track[] = [
    {
      items: [
        { id: 'ASSET_DETAIL', component: 'Asset detail 1' },
        { id: 'ASSET_DETAIL', component: 'Asset detail 2' },
      ],
    },
    {
      items: [
        { id: 'TICKET', component: 'Ticket detail 1' },
        { id: 'TICKET', component: 'Ticket detail 1' },
      ],
    },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach((template) => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  };

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();

    const componentType = dashboardCards[item.component];
    const componentRef = viewContainerRef.createComponent(componentType);
    const instance = componentRef.instance as DashboardCardContainer;
    instance.item = item;
  };
}
