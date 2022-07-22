import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssetSummary } from '../models/asset-summary';

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

  getDetails(id: string): Observable<AssetSummary | undefined> {
    return of(assetSummaries.find((assetSummary) => assetSummary.id === id));
  }
}
