import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Food } from '../models/food.model';


@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private httpClient:HttpClient) {}

  getFoods(){
    let url=environment.FOOD_BASE_URL;
    //return this.httpClient.get(url).map((response:Response)=>response.json);
    
    return this.httpClient.get(url);
  }
}
