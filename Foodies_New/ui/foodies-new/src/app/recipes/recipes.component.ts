import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  id:string;
  recipeResult:any;
  recipeList=new Array;
  recipeNameList=new Array;
  i:number;
  constructor(private recipe:RecipesService,private router:Router) {
   }

  ngOnInit(){
    this.getRecipyList();
  }

  getRecipyList(){
    this.recipe.getRecipes().subscribe((data:any[])=>{
      this.recipeResult=data;
      console.log(this.recipeResult);
      for(this.i=0;this.i<=this.recipeResult.length-1;this.i++)
        this.recipeList.push(this.recipeResult[this.i]);
      console.log(this.recipeList);
    })
  }
  recipeById(id){
    console.log("Hello");
    this.recipe.recipe_id=id;
    this.router.navigate(['/foodrecipe']);
  }


}
