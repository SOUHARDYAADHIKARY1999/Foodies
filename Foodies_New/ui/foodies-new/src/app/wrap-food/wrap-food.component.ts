import { Component, HostListener, OnInit } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';
import { WrapFoodService } from '../services/wrap-food.service';
import { Cart_Item } from '../models/cart-item.model';

@Component({
  selector: 'app-wrap-food',
  templateUrl: './wrap-food.component.html',
  styleUrls: ['./wrap-food.component.css']
})
export class WrapFoodComponent implements OnInit {

  cartArray=[];
  subTotal=0;

  divisionArray=new Array;
  tempdivisionArray=new Array;

  divisionResult:any;
  temp_div_arr=new Array;
  final_div_arr=new Array;
  i:any;
  j:any;


  isSticky: boolean = false;

  temp_cartArr=[];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  
  constructor(private wrap_food:WrapFoodService,private cart_item:CartItemService) { }

  ngOnInit(): void {
    this.divisionArray=["Fab_Wraps_starting_at_99_each","Wraps_Chefs_Specials","Daily_Value_Wrap_Combos",
              "Dessert"]
    this.getWrapFoodList();
    console.warn(this.divisionArray);
  }

  getWrapFoodList(){
    this.wrap_food.getWrapFoods().subscribe((data:any[])=>{
      this.divisionResult=data;
      for(this.j=0;this.j<=this.divisionArray.length-1;this.j++){
        for(this.i=0;this.i<this.divisionResult.length;this.i++){
          console.log(this.divisionResult[0].wrapFoodVeg);
          if(this.divisionArray[this.j]==this.divisionResult[this.i].wrapFoodDivision){
            this.temp_div_arr.push(this.divisionResult[this.i]);
          }
        }
        this.final_div_arr.push(this.temp_div_arr);
        console.log(this.temp_div_arr);
        this.temp_div_arr=[];
      }
      console.log(this.final_div_arr);
      
      
    })
    
  }
  changeName(s:string):string{
    let re= /\_/gi;
    let result=s.replace(re," ");
    return result;

  }
  addItem(prodObj:any){

    //console.log(prodObj);
    interface Prod
    {
      "_id":string;
      "wrapFoodDivision":string;
      "wrapFoodImageUrl":string;
      "wrapFoodName":string;
      "wrapFoodVeg":boolean;
      "wrapFoodPrice":string;
      "wrapFoodDescription":string;
      "wrapFoodRaiting":string;
    }
    //console.log(JSON.stringify(prodObj));
    let temp:Prod=JSON.parse(JSON.stringify(prodObj));
    var Cart_Item={
      _id:"",
      cartItemVeg:temp.wrapFoodVeg,
      productId:temp._id,
      cartItemName:temp.wrapFoodName,
      cartItemQuantity:1,
      foodPrice:parseInt(temp.wrapFoodPrice), 
    }
    console.log(Cart_Item);
    this.cart_item.addCartItems(Cart_Item).subscribe((res)=>{
      //this.getCartItems();
      window.location.reload();
    })


  }
  getCartItems(){
    this.cart_item.getCartItems().subscribe((data:any[])=>{
      this.cartArray=data;
      for(let i=0;i<this.cartArray.length;i++){
        this.subTotal+=this.cartArray[i].foodPrice*this.cartArray[i].cartItemQuantity;
      }
      this.cart_item.subTotalAmt=this.subTotal;
      console.log(this.cartArray);
      console.log(this.cartArray.length);
    },
    err=>{
      console.log(err);
    });
  }
}
