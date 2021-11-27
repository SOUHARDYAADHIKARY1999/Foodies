import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  id:string
  constructor(private recipe:RecipesService,private router:Router) {
   }

  ngOnInit(){
  }

  recipeById(id){
    console.log("Hello");
    this.recipe.recipe_id=id;
    this.router.navigate(['/foodrecipe']);
  }


}
