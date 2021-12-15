import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent implements OnInit {

  cartArray=[];
  subTotal=0;
  emptyCart=false;

  constructor(private cart_item:CartItemService) { }

  ngOnInit(): void {
    
    this.getCartItems();
  }

  getCartItems(){
    this.cart_item.getCartItems().subscribe((data:any[])=>{
      this.cartArray=data;
      for(let i=0;i<this.cartArray.length;i++){
        this.subTotal+=this.cartArray[i].foodPrice*this.cartArray[i].cartItemQuantity;
      }
      if(this.subTotal==0)
        this.emptyCart=true;
      console.log(this.cartArray);
      console.log(this.cartArray.length);
    },
    err=>{
      console.log(err);
    });
    console.warn(this.subTotal);
  }
  reduceCartItem(prodObj:any){
    if(prodObj.cartItemQuantity==1)
      this.deleteCartItem(prodObj._id);
    else{
      var prod={ 
        _id:prodObj._id,
        productId:prodObj.productId,
        cartItemVeg:prodObj.cartItemVeg,
        cartItemName:prodObj.cartItemName,
        cartItemQuantity:prodObj.cartItemQuantity-1,
        foodPrice:parseInt(prodObj.foodPrice)
      }
      /*console.log(prod);
      console.log(prodObj);
      console.log(prodObj.productId);
      console.log(prodObj.cartItemName);*/

      this.cart_item.updateCartItems(prod).subscribe((res)=>{
        window.location.reload();
      });
    }
  }
  increaseCartItem(prodObj:any){
    console.log(prodObj);
    var prod={ 
      _id:prodObj._id,
      productId:prodObj.productId,
      cartItemVeg:prodObj.cartItemVeg,
      cartItemName:prodObj.cartItemName,
      cartItemQuantity:prodObj.cartItemQuantity+1,
      foodPrice:parseInt(prodObj.foodPrice)
    }
    /*console.log(prod);
    console.log(prodObj);
    console.log(prodObj.productId);
    console.log(prodObj.cartItemName);*/

    this.cart_item.updateCartItems(prod).subscribe((res)=>{
      window.location.reload();
    });
  }
  deleteCartItem(id:string){
    this.cart_item.deleteCartItem(id).subscribe((res)=>{
      window.location.reload();
    })
  }
}
