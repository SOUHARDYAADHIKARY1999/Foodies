import { Component, HostListener, OnInit } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';
import { WrapFoodService } from '../services/wrap-food.service';

@Component({
  selector: 'app-wrap-food',
  templateUrl: './wrap-food.component.html',
  styleUrls: ['./wrap-food.component.css']
})
export class WrapFoodComponent implements OnInit {

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
    this.divisionArray=["Fab_Wraps_starting_at_99_each","Wraps_Chefs_Specials","Daily_Value_Wrap_Combos"]
    this.getWrapFoodList()
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
  addItem(name:number){
    console.log(name);
    this.cart_item.getCartItems().subscribe((data:any[])=>{
      this.temp_cartArr=data;
      //console.log(this.temp_cartArr[0].cartItemName);
      for(let i=0;i<this.temp_cartArr.length;i++){
        if(this.temp_cartArr[i].cartItemName==name){
          console.log("hello");
          this.temp_cartArr[i].cartItemQuantity=this.temp_cartArr[i].cartItemQuantity+1;
        }
      }
    })

  }
}
