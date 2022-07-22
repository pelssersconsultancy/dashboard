import { Type } from '@angular/core';
import { AssetDetailContainer } from './asset-detail/asset-detail.container';
import { TicketDetailContainer } from './ticket-detail/ticket-detail.container';

export type DashboardComponentType = Type<AssetDetailContainer> | Type<TicketDetailContainer>;

export const dashboardCards: { [name: string]: DashboardComponentType} = {
  ASSET_DETAIL: AssetDetailContainer,
  TICKET_DETAIL: TicketDetailContainer,
};
