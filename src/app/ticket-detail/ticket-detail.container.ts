import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';

export interface TicketDetailSettings {
  id: string;
  assignee: string;
}

@Component({
  template: `
    <app-ticket-detail></app-ticket-detail>
  `,
})
export class TicketDetailContainer extends DashboardCardContainer {}
