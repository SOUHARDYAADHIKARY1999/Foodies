import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArray=[];
  totalAmt=0;
  tempTotal:any;

  
  fun():number{
    //this.getCartItems();
    console.log(this.tempTotal);
    return this.tempTotal;
  }

  constructor(private cart_item:CartItemService) { }

  ngOnInit(){
    this.getCartItems();
    //this.fun();
    console.log("lp");
    console.log(this.totalAmt);
  }
  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
    ) => {
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS'
      };
    }

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  }
  temp1(id:number):number{
    console.log(id);
    return this.totalAmt=id;  
  }

  getCartItems(){
    let total:number;
    this.cart_item.getCartItems().subscribe((data:any[])=>{
      this.cartArray=data;
      for(let i=0;i<this.cartArray.length;i++){
        this.totalAmt+=(this.cartArray[i].foodPrice)*(this.cartArray[i].cartItemQuantity);
      }
      localStorage.setItem('totalAmt',String(this.totalAmt));
      /*this.temp1(this.totalAmt);
      total=this.totalAmt;
      this.tempTotal=this.totalAmt;
      console.log(this.totalAmt);
      console.warn(total);*/
    })
    console.log("out",this.totalAmt);
    return total;
  }
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: localStorage.getItem('totalAmt'),
      currencyCode: 'INR',
      countryCode: 'IN'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };

}
