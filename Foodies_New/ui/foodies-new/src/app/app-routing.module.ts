import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FoodsComponent } from './foods/foods.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthenticateGuard } from './authentication/authenticate.guard';


const routes: Routes = [
  
    //{path: '',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
    //{path: '',component:SignUpComponent},
    { 
      path: 'recipes', component:RecipesComponent,canActivate:[AuthenticateGuard]
    },
    { path: 'home', component:HomeComponent },
    { path: 'foods', component:FoodsComponent},
    
    {
      path: 'signup', component: AuthComponent,
      children: [{ path: '', component: SignUpComponent }]
    },
    
    {
      path: 'login', component: AuthComponent,
      children: [{ path: '', component: SignInComponent }]
    },
    {
      path:'userprofile',component:UserProfileComponent},
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
