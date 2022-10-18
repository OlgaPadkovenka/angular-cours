import { Component, OnInit } from '@angular/core';
import { Nft } from '../model/nfts.model';
import { NftService } from '../nft.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, mergeMap } from 'rxjs';
import { __param } from 'tslib';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public nft: Nft = {};
  constructor(private activatedRoute: ActivatedRoute, private nftService : NftService) { }

  /*ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.nftService.getOne(params['blockchain'], params['contractId'], params['token']))
    ).subscribe((res) => {
      this.nft = res.body!.nft;
    })
  }*/

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params['contractId']),
      mergeMap(params =>
        this.nftService.getOne(params['blockchain'], params['contractId'], params['token']))
    ).subscribe(res => {
      if (res!.body !== null) {
        this.nft = res.body!.nft;
      }
    });
  }

}
