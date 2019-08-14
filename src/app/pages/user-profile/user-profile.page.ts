import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user : User;
  tab = 'profile';
  userRates;
  stars;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getLoggedUser();
    this.userRates = this.userService.getUserRates(this.user.id);
  }

  switchCase(type: string) {
    this.tab = type;
  }
}
