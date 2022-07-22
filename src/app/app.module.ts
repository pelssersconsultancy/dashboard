import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AssetDetailComponent,
    TicketDetailComponent,
    DashboardComponent,
    DashboardCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, DynamicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
