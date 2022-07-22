import { ChangeDetectorRef, Component, OnInit, Type } from '@angular/core';
import { dashboardCardsRegistry } from '../dashboard-cards-registry';

import { Track } from '../models/track';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tracks: Track[] = [
    {
      items: [
        { component: 'AssetDetailComponent' },
        { component: 'AssetDetailComponent' },
      ],
    },
    {
      items: [
        { component: 'TicketDetailComponent' },
        { component: 'TicketDetailComponent' },
      ],
    },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  mapToComponent(component: string): Type<any> {
    return dashboardCardsRegistry[component];
  }
}
