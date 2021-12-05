import { Component, OnInit } from '@angular/core';
import { showUser } from '../tab1/tab1.page';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {
  displayUser: { name: string, lastname: string, phone: number, phone2: number, img: string, dateAdd: Date,dateUpdate: Date }[];
  dateAdd = Date.now();
  dateUpdate = Date.now();
  constructor() {
    this.displayUser = showUser;
    console.log(this.displayUser);
    this.dateAdd = Date.now();
    this.dateUpdate  = Date.now();

  }
  ngOnInit() {
  }

}
