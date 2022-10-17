import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nft, Nfts } from "../model/nfts.model";
import { NftService } from '../nft.service';

@Component({
  selector: 'app-list-nft',
  templateUrl: './list-nft.component.html',
  styleUrls: ['./list-nft.component.scss']
})
export class ListNftComponent implements OnInit {

  public nfts : Array<Nft> | null = new Array<Nft>();

  constructor(private nftService: NftService) { 
    //ne pas appeler le service dans le constructeur
  }

  ngOnInit(): void {
    
 this.nftService.getAll().subscribe((response) => {
  this.nfts = response.body!.nfts;
 });
  }

}
