import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarketplaceModule } from './marketplace/marketplace.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarketplaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
