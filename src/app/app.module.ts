import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './homePage/app.component';
import { TreasureHuntComponent } from './pages/treasure-hunt/treasure-hunt.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    TreasureHuntComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
