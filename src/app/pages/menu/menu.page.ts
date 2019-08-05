import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Offres',
      url: '/job-list',
      icon: 'home'
    },
    {
      title: 'Inscription Bar',
      url: '/bar-form',
      icon: 'home'
    },
    {
      title: 'Inscription Utilisateur',
      url: '/job-form',
      icon: 'home'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
