import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './homePage/app.component';
import { DetailCard } from './pages/detail-card/detail-card';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, DetailCard, PortfolioComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
