import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nft/single-nft.component';



@NgModule({
  declarations: [
    SingleNFTComponent
  ],
  exports: [
    SingleNFTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
