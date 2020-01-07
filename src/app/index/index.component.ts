import { Component, OnInit } from '@angular/core';
import{car_priceName}from './car_priceName';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
view=car_priceName;
}
