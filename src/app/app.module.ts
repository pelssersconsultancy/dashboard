import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { AssetDetailContainer } from './asset-detail/asset-detail.container';
import { TicketDetailContainer } from './ticket-detail/ticket-detail.container';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AssetDetailComponent,
    AssetDetailContainer,
    TicketDetailComponent,
    TicketDetailContainer,
    DashboardComponent,
    DashboardCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
