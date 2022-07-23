import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssetSummary } from '../models/asset-summary';
import { delay } from 'rxjs/operators';
import { getRandomInt } from '../util/random-number';

const assetSummaries: AssetSummary[] = [
  {
    id: '1',
    name: 'heat-pump',
    description: 'description of heat pump',
  },
  {
    id: '2',
    name: 'water-pump',
    description: 'description of water pump',
  },
];

@Injectable({ providedIn: 'root' })
export class AssetDetailService {
  constructor() {
    console.log('constructed AssetDetailService');
  }

  getDetails(id: string): Observable<AssetSummary> {
    console.log(`fetching asset summary for id ${id}`);
    const summary = assetSummaries.find(
      (assetSummary) => assetSummary.id === id
    );

    if (summary) {
      return of(summary).pipe(delay(getRandomInt(1500, 5000)));
    }

    throw new Error(`AssetSummary with id ${id} not found`);
  }
}
