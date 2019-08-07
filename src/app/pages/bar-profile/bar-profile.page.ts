import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-profile',
  templateUrl: './bar-profile.page.html',
  styleUrls: ['./bar-profile.page.scss'],
})
export class BarProfilePage implements OnInit {

  bar = {
    establishmentName: 'Le Joyeux Luron',
    theme: 'Gaitée',
    email: 'joyeuxluron@gmail.com',
    phone: '0745258414',
    address: '12 rue du Bonheur',
    description: '',
    website: 'joyeux-luron.com',
    images: [{url: "../../assets/images/bar1.jpg"}, {url: "../../assets/images/bar2.jpg"}, {url: "src/assets/images/bar3.jpg"}]
  };

  constructor() { }

  ngOnInit() {
  }

}
