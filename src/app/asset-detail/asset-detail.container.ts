import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';

export interface AssetDetailsSettings {
  id: string;
  name: string;
}

@Component({
  template: `
    <app-asset-detail></app-asset-detail>
  `,
})
export class AssetDetailContainer extends DashboardCardContainer {}
