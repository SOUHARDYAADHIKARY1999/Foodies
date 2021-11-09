import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers:[FoodService]
})
export class FoodsComponent implements OnInit {

  foodResult:any;
  foodList:any;
  constructor(private foodService:FoodService) { }

  ngOnInit(): void { 
    this.getFoodList();
  }
  getFoodList(){
    this.foodService.getFoods().subscribe((data : any[])=>{
      this.foodResult=data;
      this.foodList=this.foodResult.results;
      console.log(this.foodList);
      console.log(this.foodResult);
    });
  }

}
