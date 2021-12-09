import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Wrap_Food } from '../models/wrap-food.model';


@Injectable({
  providedIn: 'root'
})
export class WrapFoodService {

  constructor(private http:HttpClient) { }

  getWrapFoods(){
    let url=environment.WRAP_FOOD_BASE_URL;
    return this.http.get(url);
  }
  getWrapFoodByID(foodObj:Wrap_Food){
    let url=environment.WRAP_FOOD_BASE_URL;
    return this.http.get(url+ `/${foodObj._id}`);
  }
  postWrapFood(foodObj:Wrap_Food) {
    let url=environment.WRAP_FOOD_BASE_URL;
    return this.http.post(url, foodObj);
  }
  updateWrapFood(foodObj:Wrap_Food){
    let url=environment.WRAP_FOOD_BASE_URL;
    return this.http.put(url + `/${foodObj._id}`, foodObj);
  }
  deleteWrapFood(_id: string){
    let url=environment.WRAP_FOOD_BASE_URL;
    return this.http.delete(url + `/${_id}`);
  }

}
