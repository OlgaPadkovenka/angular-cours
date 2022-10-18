import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nft, Nfts } from "./model/nfts.model";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
export interface SingleNft {
  response: string;
  nft: Nft;
}

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<HttpResponse<Nfts>>{
    const headers = new HttpHeaders().set('Authorization', environment.apiKey); 
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

  getOne(blockchain: string, contractId: string, token: string): Observable<HttpResponse<SingleNft>> {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', environment.apiKey);
    const params = new HttpParams()
      .set('chain', blockchain)
    return this.http.get<SingleNft>(`${environment.baseUrl}${contractId}/${token}`,
      {headers, params, observe: 'response'});
  }

}
