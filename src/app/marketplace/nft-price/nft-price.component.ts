import { Component, Input, OnInit } from '@angular/core';
import { Nft } from "../model/nfts.model";

@Component({
  selector: 'app-nft-price',
  templateUrl: './nft-price.component.html',
  styleUrls: ['./nft-price.component.scss']
})
export class NftPriceComponent implements OnInit {

  //paramètre price
  @Input()
  public price: number | undefined = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}