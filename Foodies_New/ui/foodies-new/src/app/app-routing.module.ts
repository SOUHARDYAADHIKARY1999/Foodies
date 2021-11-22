import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FoodsComponent } from './foods/foods.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [
  
    /*{path: '',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},*/
    //{path: '',component:AuthComponent},
    { path: 'recipes', component:RecipesComponent},
    { path: 'home', component:HomeComponent },
    { path: 'foods', component:FoodsComponent }

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
