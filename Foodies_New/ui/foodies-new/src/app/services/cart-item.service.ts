import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http:HttpClient) { }

  getCartItems(){
    let url=environment.CART_ITEM_BASE_URL;
    return this.http.get(url);
  }
  addCartItems(cartObj:any){
    let url=environment.CART_ITEM_BASE_URL;
    let header={'content-type':'application/json'};
    return this.http.post(url,cartObj,{'headers':header,responseType:'text'});
  }
}
