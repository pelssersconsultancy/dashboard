import { Component } from '@angular/core';

import { Track } from '../models/track';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  tracks: Track[] = [
    // {
    //   items: [
    //     {
    //       component: 'AssetDetailComponent',
    //       inputs: { id: '1' },
    //     },
    //     {
    //       component: 'AssetDetailComponent',
    //       inputs: { id: '2' },
    //     },
    //   ],
    // },
    {
      items: [
        {
          component: 'TicketDetailComponent',
          inputs: { id: '1' },
        },
        // {
        //   component: 'TicketDetailComponent',
        //   inputs: { id: '2' },
        // },
        // {
        //   component: 'TicketDetailComponent',
        //   inputs: { id: '3' },
        // },
      ],
    },
  ];
}
