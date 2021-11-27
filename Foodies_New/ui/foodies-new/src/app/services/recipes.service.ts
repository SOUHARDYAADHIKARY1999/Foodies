import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipe_id:string;

  constructor(private http:HttpClient) { }

  getData(recipe_id){
    let recipe_info="https://api.spoonacular.com/recipes/"+recipe_id+"/information?apiKey=51598bd680024c48b511ddbe667a9a06"
    //let recipe_info="https://api.spoonacular.com/recipes/1646939/information?apiKey=51598bd680024c48b511ddbe667a9a06"
    //let summary_url="https://api.spoonacular.com/recipes/716429/summary?apiKey=51598bd680024c48b511ddbe667a9a06"
    return this.http.get(recipe_info);
    //return this.http.get(summary_url);
  }
  changeRecipeID(id:string){
    this.recipe_id=id;
  }
}
