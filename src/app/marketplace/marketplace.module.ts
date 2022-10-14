import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nft/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';
import { FavoriteNftComponent } from './favorite-nft/favorite-nft.component';




@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,

  ],
  exports: [
    SingleNFTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
