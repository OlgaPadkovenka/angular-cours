import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nft/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';
import { FavoriteNftComponent } from './favorite-nft/favorite-nft.component';
import { ListNftComponent } from './list-nft/list-nft.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';




@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,
    ListNftComponent,
    DescriptionComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MarketplaceModule { }
