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
      console.log(this.cartArray)
      console.log(this.cartArray.length);
    },
    err=>{
      console.log(err);
    });
  }
}
