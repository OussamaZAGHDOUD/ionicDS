import { proList } from './../tab1/tab1.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  professionnel: {name: string, phone: number, img: string}[]  ;

  constructor() {
    this.professionnel = proList;
    console.log(this.professionnel);
    console.log(this.professionnel.length);
  }

  ngOnInit() {
  }

}
