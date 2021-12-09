import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipe_id:string;

  constructor(private http:HttpClient) { }

  getData(recipe_id){
    let recipe_info="https://api.spoonacular.com/recipes/"+recipe_id+"/information?apiKey=51598bd680024c48b511ddbe667a9a06"
    return this.http.get(recipe_info);
    //return this.http.get(summary_url);
  }
  changeRecipeID(id:string){
    this.recipe_id=id;
  }
  getRecipes(){
    let url=environment.RECIPE_BASE_URL;

    return this.http.get(url);

  }
}
