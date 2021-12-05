import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList: Contact[] = [
    {
      name: 'ayoub Med',
      lastname: 'w',
      phone: 11111111,
      phone2: 44444444,
      img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'oussama',
      lastname: 'z',
      phone: 22222222,
      phone2: 33333333,
      img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'ghassen',
      lastname: 'r',
      phone: 66666666,
      phone2: 99999999,
      img: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

    {
      name: 'Safa',
      lastname: 'b',
      phone: 77777777,
      phone2: 88888888,
      img: 'https://cdn-icons.flaticon.com/png/512/3220/premium/3220282.png?token=exp=1638734097~hmac=d0bd1ea194fa6213eb6a0662d3223812',
      dateAdd: Date.now(),
      dateUpdate: Date.now(),
    },

  ];

  constructor() { }

  getAllContact() {
    return [...this.contactList];
  }

}
