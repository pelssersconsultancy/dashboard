import { ComponentStore } from '@ngrx/component-store';
import { filter } from 'rxjs/operators';

import { AssetSummary } from '../models/asset-summary';
import { AssetDetailService } from './asset-detail.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface AssetDetailState {
  loading: boolean;
  assetSummary?: AssetSummary;
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

  // ******** Updaters ****** //
  readonly setId = this.updater(
    (state, id: string): AssetDetailState => ({ ...state, id })
  );
}
