import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menuLists=['Breakfast','Lunch','Dinner','Dessert','Salads','Drinks']
  selectedList:any

  constructor() {
  }

  ngOnInit(){
    this.selectedList=this.menuLists[0]
  }

  openMenuList(menuList:any){
    this.selectedList=menuList
  }
}
