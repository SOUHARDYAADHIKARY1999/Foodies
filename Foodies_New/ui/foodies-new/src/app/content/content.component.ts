import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'foodies-new';

  menuLists=['Breakfast','Lunch','Dinner','Dessert','Salads','Drinks']
  selectedList:any
  constructor() { }

  ngOnInit(){
    this.selectedList=this.menuLists[0]
  }

  openMenuList(menuList:any){
    this.selectedList=menuList
  }

}
