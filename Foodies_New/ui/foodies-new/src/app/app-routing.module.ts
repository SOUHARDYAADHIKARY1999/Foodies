import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
    {path: '',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
    { path: 'foods', loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule) },  
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
      
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
