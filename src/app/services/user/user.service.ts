import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users : User[] = [
          { id: 1, firstname: 'Jean', lastname: 'Morales', profilePicture: 'https://maphotoportrait.fr/1792-large_default/portrait-cv-linkedin.jpg', email: 'jeanmorales@gmail.com', phone: '0678451120', address: '12 rue de la Colombe', zip: 98654, city: 'Andives-sur-Mer'},
          { id: 2, firstname: 'Marie', lastname: 'Dagneaux', profilePicture: 'https://www.monportraitpro.fr/wp-content/uploads/2018/10/mon-portrait-pro.jpg', email: 'mariedagneaux@gmail.com', phone: '0685522147', address: '62 rue Alexandre Flemming', zip: 41562, city: 'Strapon-les-Oises'},
          { id: 3, firstname: 'Serges', lastname: 'Lamma', profilePicture: 'https://www.photo-cv.com/img/portfolio/fullsize/11.jpg', email: 'sergeslamma@gmail.com', phone: '0625988513', address: '45 avenue des Cabossés', zip: 78415, city: 'Azuria'},
        ]

  userRates : {rate: number, commentary: string, userId: number, barId: number}[] = [
    {rate: 4, commentary: '', userId: 2, barId: 1 },
    {rate: 3, commentary: '', userId: 1, barId: 3 },
    {rate: 3, commentary: '', userId: 1, barId: 1 },
    {rate: 5, commentary: '', userId: 3, barId: 3 },
    {rate: 4, commentary: '', userId: 1, barId: 2 },
    {rate: 2, commentary: '', userId: 2, barId: 2 },
  ]

  constructor() { }


  getUsers() {
    return this.users
  }

  getUser(id: number) {
    for (let user of this.users) {
      if (id == user.id) {
        return user;
      }
    }
  }

  logUser(email: string) {
    for (let user of this.users) {
      if (email == user.email) {
        return user;
      }
    }
    return false;
  }

  getUserRates(userId: number) {
    let userRates = [];
    this.userRates.forEach(userRate => {
      if(userRate.userId == userId) {
        userRates.push(userRate);
      }
    })
    return userRates;
  }

}
