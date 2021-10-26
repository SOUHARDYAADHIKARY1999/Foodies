import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodies-new';

  menuLists=['Breakfast','Lunch','Dinner','Dessert','Salads','Drinks']
  selectedList:any

  constructor(){}

  ngOnInit(){
    this.selectedList=this.menuLists[0]
  }

  openMenuList(menuList:any){
    this.selectedList=menuList
  }
}
