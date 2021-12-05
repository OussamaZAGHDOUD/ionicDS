import { autreList } from './../tab1/tab1.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  autres: {name: string, phone: number, img: string}[]  ;

  constructor() {
    this.autres = autreList;
    console.log(this.autres);
    console.log(this.autres.length);
  }


  ngOnInit() {
  }

}
