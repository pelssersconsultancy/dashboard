import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

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
