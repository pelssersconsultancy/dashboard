import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TicketSummary } from '../models/ticket-summary';
import { getRandomInt } from '../util/random-number';

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
  {
    id: '3',
    assignee: 'Joris Compernol',
    status: 'on hold',
  },
];

@Injectable({ providedIn: 'root' })
export class TicketDetailService {
  constructor() {
    console.log('constructed TicketDetailService');
  }

  getDetails(id: string): Observable<TicketSummary> {
    console.log(`fetching ticket summary for id ${id}`);
    const summary = ticketSummaries.find(
      (ticketSummary) => ticketSummary.id === id
    );

    if (summary) {
      return of(summary).pipe(delay(getRandomInt(1500, 5000)));
    }

    throw new Error(`TicketSummary with id ${id} not found`);
  }
}
