import { Tab2Page } from './../tab2/tab2.page';
import { Component,Input,OnInit,ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddContactPage, newContacts } from '../add-contact/add-contact.page';
import { ContactService } from '../services/contact-service.service';
import { ShowDetailsPage} from '../show-details/show-details.page';
import { IonSearchbar } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;
  amis = amisList;
  famille = familleList;
  pro = proList;
  other = autreList;
  showList = showUser;
  contacts = [];
  public searchedItem: any;
  constructor(private navController: NavController, private contactservice: ContactService, private menu: MenuController) {
    this.contacts = this.contactservice.getAllContact();
    this.searchedItem = this.contacts;

    setTimeout(() => {
      this.contacts = this.contactservice.getAllContact();
    }, 3000);

  }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  getContacts() {
    this.contacts =  this.contactservice.getAllContact();
  }
  addContact(){
    this.navController.navigateForward('add-contact');
    console.log('contact added');
  }


  showDetails(_item){
    this.navController.navigateForward('show-details');
    this.showList[0] = _item;
    console.log('item displayed');
    console.log(_item.name + 'displayed');
  }

  delete(_item){
    const index = this.contacts.map(function(_item){return _item.name; }).indexOf(_item);
    this.contacts.splice(index,1);
    console.log(_item);
    console.log('item deleted');
  }

  markFav(_item){
    this.amis.push(_item);
    console.log(_item.name + 'marked favorite');
    console.log(this.amis.length);
    console.log(this.amis[this.amis.length - 1]);
  }

  markFamille(_item) {

    this.famille.push(_item);
    console.log(_item.name + 'marked favorite');
    console.log(this.famille.length);
    console.log(this.famille[this.amis.length - 1]);
  }

  markPro(_item) {

    this.pro.push(_item);
    console.log(this.pro.length);
    console.log(this.pro[this.pro.length - 1]);
  }

  markOther(_item) {

    this.other.push(_item);
    console.log(this.pro.length);
    console.log(this.pro[this.pro.length - 1]);
  }

  _ionChange(event) {
    const val = event.target.value;

    this.searchedItem = this.contacts;
    console.log('item',this.searchedItem);
    if (val && val.trim() !== '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return ((item.name+item.lastname+item.phone+item.phone2+item.Tab2Page).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

export var amisList: {name: string, phone: number, img: string}[] = [];
export var familleList: {name: string, phone: number, img: string}[] = [];
export var proList: {name: string, phone: number, img: string}[] = [];
export var autreList: {name: string, phone: number, img: string}[] = [];

export var showUser: {name: string, lastname:string, phone: number, phone2: number, img: string, dateAdd: Date,dateUpdate: Date}[] = [];
