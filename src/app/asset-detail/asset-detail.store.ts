import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { filter, tap, switchMap } from 'rxjs/operators';

import { AssetSummary } from '../models/asset-summary';
import { AssetDetailService } from './asset-detail.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface AssetDetailState {
  loading: boolean;
  summary?: AssetSummary;
  id?: string;
}

@Injectable()
export class AssetDetailStore extends ComponentStore<AssetDetailState> {
  constructor(private assetDetailService: AssetDetailService) {
    super({ loading: false });
    console.log('constructed AssetDetailStore');
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
  readonly setId = this.updater(
    (state, id: string): AssetDetailState => ({ ...state, id })
  );

  readonly setLoading = this.updater(
    (state, loading: boolean): AssetDetailState => ({ ...state, loading })
  );

  readonly setSummary = this.updater(
    (state, summary: AssetSummary): AssetDetailState => ({
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
        this.assetDetailService.getDetails(id).pipe(
          tapResponse(
            (summary) => this.setSummary(summary),
            (error) => console.log(error)
          )
        )
      )
    )
  )(this.id$);
}
