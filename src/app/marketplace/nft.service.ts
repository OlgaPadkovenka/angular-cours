import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nft, Nfts } from "./model/nfts.model";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<HttpResponse<Nfts>>{
    const headers = new HttpHeaders().set('Authorization', '5940a757-0d5b-4f48-92a9-50a968817631'); 
    const params = new HttpParams()
    .set('chain', 'ethereum')
    .set('include', 'all')
    .set('page_size', '20');

    const contractId = '0x248a74f64bbf422dae243ed5d58ef0dd7298b972';

      return this.http.get<Nfts>(
        //url
        `${environment.baseUrl}` + `${contractId}`, {headers, params,  observe: "response"}
      );
  }
}
