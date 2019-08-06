import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private loggedUser: any;

  constructor() { }

  setData(newUser) {
    this.loggedUser = newUser;
  }

  getData() {
    return this.loggedUser;
  }
  
}
