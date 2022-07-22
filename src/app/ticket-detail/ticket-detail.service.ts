import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TicketSummary } from '../models/ticket-summary';

const ticketSummaries: TicketSummary[] = [
  {
    id: '1',
    assignee: 'Robby Pelssers',
    status: 'closed',
  },
  {
    id: '2',
    assignee: 'Luuk Moret',
    status: 'open',
  },
];

@Injectable({ providedIn: 'root' })
export class TicketDetailService {
  constructor() {
    console.log('constructed TicketDetailService');
  }

  getDetails(id: string): Observable<TicketSummary | undefined> {
    return of(ticketSummaries.find((ticketSummary) => ticketSummary.id === id));
  }
}
