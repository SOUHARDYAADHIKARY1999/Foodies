// built in
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FoodsComponent } from './foods/foods.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CloudKitchenComponent } from './cloud-kitchen/cloud-kitchen.component';
import { FoodRecipeComponent } from './food-recipe/food-recipe.component';
import { HomeComponent } from './home/home.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './services/auth.service';

// other
import { AuthenticateGuard } from './authentication/authenticate.guard';
import { AuthInterceptor } from './authentication/auth.interceptor';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WrapFoodComponent } from './wrap-food/wrap-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppMaterialModule } from './app.material.module';
import { SideCartComponent } from './side-cart/side-cart.component';
import { CartItemComponent } from './side-cart/cart-item/cart-item.component';
import { FoodCrudComponent } from './food-crud/food-crud.component';
import { CartComponent } from './cart/cart.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePayButtonModule } from '@google-pay/button-angular';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FoodsComponent,
    AuthComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    CloudKitchenComponent,
    FoodRecipeComponent,
    HomeComponent,
    RecipesComponent,
    WrapFoodComponent,
    SideCartComponent,
    CartItemComponent,
    FoodCrudComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    IvyCarouselModule,
    CarouselModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    GooglePayButtonModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },AuthService,AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
