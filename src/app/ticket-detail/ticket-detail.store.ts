import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { TicketSummary } from '../models/ticket-summary';
import { TicketDetailService } from './ticket-detail.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface TicketDetailState {
  loading: boolean;
  TicketSummary?: TicketSummary;
  id?: string;
}

@Injectable()
export class TicketDetailStore extends ComponentStore<TicketDetailState> {
  constructor(private ticketDetailService: TicketDetailService) {
    super({ loading: false });
    console.log('constructed TicketDetailStore');
  }

  // ******** Selectors ****** //
  readonly id$: Observable<string> = this.select((state) => state.id).pipe(
    filter(Boolean)
  );

  // ******** Updaters ****** //
  readonly setId = this.updater(
    (state, id: string): TicketDetailState => ({ ...state, id })
  );
}
