import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WrapFoodService } from '../services/wrap-food.service';
declare var M: any;
@Component({
  selector: 'app-food-crud',
  templateUrl: './food-crud.component.html',
  styleUrls: ['./food-crud.component.css']
})
export class FoodCrudComponent implements OnInit {

  constructor(private wrap_food:WrapFoodService,private router:Router) { }

  imageUrl:string;
  name:string;
  division:string;
  rating:string;
  price:string;
  veg:boolean;
  description:string;
  action=true;

  tempFoodArray=new Array;
  finalFoodArray=new Array;
  finarr=new Array;
  temp=new Array;

  temp_id:string;

  null='';
  
  
  ngOnInit(){
    this.getWrapFoodList();
    console.log(this.finalFoodArray);
    this.finarr=['lp','ko','ji'];
  }

  getWrapFoodList(){
    console.log("hello");
    this.wrap_food.getWrapFoods().subscribe((data:any[])=>{
      this.tempFoodArray=data;
      for(let i=0;i<this.tempFoodArray.length;i++){
        this.finalFoodArray.push(this.tempFoodArray[i]);
      }
      console.log(this.finalFoodArray);
    }
  );
  
  }

  addFood(){
    console.log(this.veg);
    let food={
      _id:this.null,
      division:this.division,
      img_url:this.imageUrl,
      name:this.name,
      veg:this.veg,
      price:this.price,
      description:this.description,
      raiting:this.rating,
    }

    this.wrap_food.postWrapFood(food).subscribe((res)=>{
      //M.toast({ html: 'Saved successfully', classes: 'rounded' });
      this.division='';
      this.imageUrl='',
      this.name='',
      this.veg=false,
      this.price,
      this.description,
      this.rating
      this.getWrapFoodList();
    })
  }
  updateFood(){
    console.log(this.temp_id);
    let food={ 
      _id:this.temp_id,
      division:this.division,
      img_url:this.imageUrl,
      name:this.name,
      veg:this.veg,
      price:this.price,
      description:this.description,
      raiting:this.rating,
    }
    this.wrap_food.updateWrapFood(food).subscribe((res)=>{
      this.router.navigateByUrl('/food-crud');
      this.division='';
      this.imageUrl='';
      this.name='';
      this.veg=false;
      this.price='';
      this.description='';
      this.rating='';
      this.action=true;
    })
    
    this.getWrapFoodList();
  }
  editFood(id:string){
    console.log(id);
    this.action=false;
    let food={ 
      _id:id,
      division:this.division,
      img_url:this.imageUrl,
      name:this.name,
      veg:this.veg,
      price:this.price,
      description:this.description,
      raiting:this.rating,
    }
    this.wrap_food.getWrapFoodByID(food).subscribe((data:any[])=>{
      interface Food
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
      console.log(data);
      let temp:Food=JSON.parse(JSON.stringify(data));
      this.division=this.changeName(temp.wrapFoodDivision);
      this.imageUrl=temp.wrapFoodImageUrl;
      this.name=temp.wrapFoodName;
      this.veg=temp.wrapFoodVeg;
      this.price=temp.wrapFoodPrice;
      this.description=temp.wrapFoodDescription;
      this.rating=temp.wrapFoodRaiting;
      this.temp_id=temp._id;
      
    })
    
  }
  deleteFood(id:string){
    console.log(id);
    this.wrap_food.deleteWrapFood(id).subscribe((res)=>{
      this.getWrapFoodList();
      this.router.navigateByUrl('/food-crud');
    })
  }

  changeName(s:string):string{
    let re= /\_/gi;
    let result=s.replace(re," ");
    return result;
  }
}
