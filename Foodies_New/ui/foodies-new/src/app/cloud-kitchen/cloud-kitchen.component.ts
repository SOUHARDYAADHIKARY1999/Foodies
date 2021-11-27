import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cloud-kitchen',
  templateUrl: './cloud-kitchen.component.html',
  styleUrls: ['./cloud-kitchen.component.css']
})
export class CloudKitchenComponent implements OnInit {

  kitchenList=['Fasoos','Oven story','The oak tree','Behrouz','Lunch box']
  selectedKitchen:any;
  

  constructor() { }

  ngOnInit(){
    this.selectedKitchen=this.kitchenList[0];
  }


}
