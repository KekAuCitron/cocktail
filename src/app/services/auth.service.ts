import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { UserService } from './user/user.service';
import { BarService } from './bar/bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userLogged = null;
  token: any;


  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private userService: UserService,
    private barService : BarService
  ) { }

  login(email: string, userType: string) {
    switch (userType) {
      case "user" :
        if (this.userService.logUser(email)) {
          this.userLogged = (this.userService.logUser(email));
          return this.userLogged;
        } else { return false; }
        break;

      case "bar" :
        if (this.barService.logBar(email)) {
          this.userLogged = (this.barService.logBar(email));
          return this.userLogged;
        } else { return false; }
        break;

      default :
      return false;
    }
  }

  logout() {
    this.userLogged = null;
  }

  getToken() {
    return this.token;
  }

}
