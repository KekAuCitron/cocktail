import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user: any;

  pages = [
    {
      title: 'Liste d\'offres',
      url: '/menu/job-list',
      icon: 'list-box'
    },
    {
      title: 'Profile',
      url: '',
      icon: 'contact'
    }
  ]

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getLoggedUser();
    this.pages.forEach(page => {
      if(page.title == 'Profile') {
        page.url = '/menu/'+this.authService.getUserType()+'-profile';
      } 
    })
  }

}
