import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.page.html',
  styleUrls: ['./bar-form.page.scss'],
})
export class BarFormPage implements OnInit {

  bar = {
    establishmentName: '',
    theme: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    website: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
