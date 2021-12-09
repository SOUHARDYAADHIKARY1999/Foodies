import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-food',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers:[FoodService]
})
export class FoodsComponent implements OnInit {

  foodResult:any;
  //foodList:any;
  constructor(private foodService:FoodService) { }

  ngOnInit(): void { 
    this.getFoodList();
  }
  getFoodList(){
    this.foodService.getFoods().subscribe((data : any[])=>{
      this.foodResult=data;
      console.log(this.foodResult);
      //this.foodList=this.foodResult.results;
      //console.log(this.foodList);
       
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
