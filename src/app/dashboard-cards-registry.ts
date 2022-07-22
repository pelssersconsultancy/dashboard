import { Type } from '@angular/core';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

export type DashboardComponentType =
  | Type<TicketDetailComponent>
  | Type<AssetDetailComponent>;

export const dashboardCardsRegistry: {
  [name: string]: DashboardComponentType;
} = {
  TicketDetailComponent,
  AssetDetailComponent,
};
