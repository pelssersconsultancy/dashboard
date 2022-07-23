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
        {
          component: 'AssetDetailComponent',
          inputs: { id: '1' },
          outputs: {
            loading: (isLoading: boolean) =>
              console.log(`AssetDetailComponent 1 loading: ${isLoading}`),
          },
        },
        {
          component: 'AssetDetailComponent',
          inputs: { id: '2' },
          outputs: {
            loading: (isLoading: boolean) =>
              console.log(`AssetDetailComponent 1 loading: ${isLoading}`),
          },
        },
      ],
    },
    {
      items: [
        {
          component: 'TicketDetailComponent',
          inputs: { id: '1' },
          outputs: {
            loading: (isLoading: boolean) =>
              console.log(`TicketDetailComponent 1 loading: ${isLoading}`),
          },
        },
        {
          component: 'TicketDetailComponent',
          inputs: { id: '2' },
          outputs: {
            loading: (isLoading: boolean) =>
              console.log(`TicketDetailComponent 2 loading: ${isLoading}`),
          },
        },
      ],
    },
  ];
}
