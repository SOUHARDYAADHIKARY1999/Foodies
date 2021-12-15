import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Cart_Item } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  subTotalAmt:number;

  constructor(private http:HttpClient) { }

  getCartItems(){
    let url=environment.CART_ITEM_BASE_URL;
    return this.http.get(url);
  }
  addCartItems(cartObj:Cart_Item){
    let url=environment.CART_ITEM_BASE_URL;
    console.log(cartObj);
    let header={'content-type':'application/json'};
    return this.http.post(url,cartObj,{'headers':header,responseType:'text'});
  }
  updateCartItems(cartObj:Cart_Item){
    let url=environment.CART_ITEM_BASE_URL;
    let header={'content-type':'application/json'};
    return this.http.put(url + `/${cartObj._id}`,cartObj,{'headers':header,responseType:'text'});
  }
  deleteCartItem(_id: string){
    let url=environment.CART_ITEM_BASE_URL;
    return this.http.delete(url + `/${_id}`);
  }
}
