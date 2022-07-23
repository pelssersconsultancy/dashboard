import { Component, OnInit, Type } from '@angular/core';
import { dashboardCardsRegistry } from '../dashboard-cards-registry';

import { Track } from '../models/track';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  tracks: Track[] = [
    {
      items: [
        { component: 'AssetDetailComponent', inputs: { id: '1' } },
        { component: 'AssetDetailComponent', inputs: { id: '2' } },
      ],
    },
    {
      items: [
        { component: 'TicketDetailComponent', inputs: { id: '1' } },
        { component: 'TicketDetailComponent', inputs: { id: '2' } },
      ],
    },
  ];

  mapToComponent(component: string): Type<any> {
    return dashboardCardsRegistry[component];
  }
}
