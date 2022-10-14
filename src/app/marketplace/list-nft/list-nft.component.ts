import { Component, OnInit } from '@angular/core';
import { Nft } from "../model/nfts.model";
import { NftService } from '../nft.service';

@Component({
  selector: 'app-list-nft',
  templateUrl: './list-nft.component.html',
  styleUrls: ['./list-nft.component.scss']
})
export class ListNftComponent implements OnInit {

  public nfts: Array<Nft> = [];

  constructor(private nftService: NftService) { 
    //ne pas appeler le service dans le constructeur
  }

  ngOnInit(): void {
    this.nfts = this.nftService.getAll();
  }

}
