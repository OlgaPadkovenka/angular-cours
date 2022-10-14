import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nft/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';




@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,

  ],
  exports: [
    SingleNFTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
