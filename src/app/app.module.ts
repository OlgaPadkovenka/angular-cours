import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MarketplaceModule } from './marketplace/marketplace.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MarketplaceModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
