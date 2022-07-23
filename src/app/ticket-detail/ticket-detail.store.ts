import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { TicketSummary } from '../models/ticket-summary';
import { TicketDetailService } from './ticket-detail.service';
import { Observable } from 'rxjs';
import { filter, tap, switchMap } from 'rxjs/operators';

interface TicketDetailState {
  loading: boolean;
  summary?: TicketSummary;
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

  readonly loading$: Observable<boolean> = this.select(
    (state) => state.loading
  );

  readonly vm$ = this.select((state) => ({
    loading: state.loading,
    summary: state.summary,
  }));
  // ******** Updaters ****** //

  setId = this.updater(
    (state, id: string): TicketDetailState => ({ ...state, id })
  );

  readonly setLoading = this.updater(
    (state, loading: boolean): TicketDetailState => ({ ...state, loading })
  );

  readonly setSummary = this.updater(
    (state, summary: TicketSummary): TicketDetailState => ({
      ...state,
      summary,
      loading: false,
    })
  );

  // ******** Effects ****** //
  readonly fetchSummary = this.effect((id$: Observable<string>) =>
    id$.pipe(
      tap(() => this.setLoading(true)),
      switchMap((id) =>
        this.ticketDetailService.getDetails(id).pipe(
          tapResponse(
            (summary) => this.setSummary(summary),
            (error) => console.log(error)
          )
        )
      )
    )
  )(this.id$);
}
