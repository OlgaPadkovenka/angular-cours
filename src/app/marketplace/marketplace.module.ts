import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nft/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';
import { FavoriteNftComponent } from './favorite-nft/favorite-nft.component';
import { ListNftComponent } from './list-nft/list-nft.component';




@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,
    ListNftComponent,

  ],
  exports: [
    ListNftComponent

  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
