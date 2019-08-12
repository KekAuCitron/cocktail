import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users : {
          id: number,
          firstname?: string, 
          lastname?: string,
          profilePicture?: string, 
          email?: string,
          phone?: string,
          address?: string,
          zip?: number,
          city?: string, 
        }[] = [
          { id: 1, firstname: 'Jean', lastname: 'Morales', profilePicture: 'https://maphotoportrait.fr/1792-large_default/portrait-cv-linkedin.jpg', email: 'jeanmorales@gmail.com', phone: '0678451120', address: '12 rue de la Colombe', zip: 98654, city: 'Andives-sur-Mer'},
          { id: 2, firstname: 'Marie', lastname: 'Dagneaux', profilePicture: 'https://www.monportraitpro.fr/wp-content/uploads/2018/10/mon-portrait-pro.jpg', email: 'mariedagneaux@gmail.com', phone: '0685522147', address: '62 rue Alexandre Flemming', zip: 41562, city: 'Strapon-les-Oises'},
          { id: 3, firstname: 'Serges', lastname: 'Lamma', profilePicture: 'https://www.photo-cv.com/img/portfolio/fullsize/11.jpg', email: 'sergeslamma@gmail.com', phone: '0625988513', address: '45 avenue des Cabossés', zip: 78415, city: 'Azuria'},
        ]

  constructor() { }


  getUsers() {
    return this.users
  }

  getUser(id: number) {
    this.users.forEach(user => {
      if (user.id == id){ 
        return user; 
      }
    });
  }

  loggUser(email: string) {
    this.users.forEach(user => {
      if (user.email == email){ 
        console.log('user.email: ', user.email);
        console.log('email: ', email);
        return user; 
      }
    });
    return this.users[0];
  }
}
