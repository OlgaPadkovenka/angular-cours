import { Component, Input, OnInit } from '@angular/core';
import { Nft } from "../model/nfts.model";

@Component({
  selector: 'app-single-nft',
  templateUrl: './single-nft.component.html',
  styleUrls: ['./single-nft.component.scss']
})
export class SingleNFTComponent implements OnInit {

  @Input()
  public nft: Nft = {
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  onFavoriteChange(newIsFavorite: boolean) {
    this.nft.isFavorite = newIsFavorite;
  }
}
