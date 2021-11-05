import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodsComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule
  ]
})
export class FoodsModule { 
}
