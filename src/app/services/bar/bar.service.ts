import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  bars : {
    id: number,
    establishmentName?: string,
    profilePicture?: string, 
    images?: string[],
    theme?: string, 
    email?: string,
    phone?: string,
    web?: string, 
    address?: string,
    lat?: number,
    lng?: number,
    description?: string
  }[] = [
    { id: 1, establishmentName: 'Le Joyeux Luron', profilePicture: "https://www.francestickers.com/2926-thickbox/logo-bar-2.jpg", images: ["https://assets.punchdrink.com/wp-content/uploads/2019/04/Article-Lazy-Bird-Chicago-Hoxton-Best-New-Bars-Spring-Summer-2019.jpg", "https://ik.imagekit.io/youshould/default_7_SkbNi54z4.jpg", "https://asset.montecarlosbm.com/styles/hero_image_desktop_2x/public/media/orphea/sbm_bb_bar_0003_1_id47390_rsz_2.jpg?itok=IRiLDy9t"], theme: 'Mexicain', email: 'joyeuxluron@gmail.com', phone: '0169528748', address: '13 boulevard des Sombreros', web: 'joyeuxluron.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dolor malesuada, hendrerit nunc a, rhoncus ex. Duis finibus vitae ante vitae congue. Suspendisse nec orci tortor. In hac habitasse platea dictumst. Nunc velit risus, eleifend id nunc at. '},
    { id: 2, establishmentName: 'La Grenouille Délurée', profilePicture: "https://image.freepik.com/vecteurs-libre/original-biere-lager-bar-logo-badge-illustration_1344-259.jpg", images: ["https://assets.punchdrink.com/wp-content/uploads/2019/04/Article-Lazy-Bird-Chicago-Hoxton-Best-New-Bars-Spring-Summer-2019.jpg", "https://ik.imagekit.io/youshould/default_7_SkbNi54z4.jpg", "https://asset.montecarlosbm.com/styles/hero_image_desktop_2x/public/media/orphea/sbm_bb_bar_0003_1_id47390_rsz_2.jpg?itok=IRiLDy9t"], theme: 'Rock', email: 'grenouilledélurée@gmail.com', phone: '0145882369', address: '56 rue des Marais', web: 'grenouilledeluree.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dolor malesuada, hendrerit nunc a, rhoncus ex. Duis finibus vitae ante vitae congue. Suspendisse nec orci tortor. In hac habitasse platea dictumst. Nunc velit risus, eleifend id nunc at. '},
    { id: 3, establishmentName: 'Le Premier Bar Avant le Commencement', profilePicture: "https://st2.depositphotos.com/4397757/8127/v/950/depositphotos_81277088-stock-illustration-martini-cocktail-bar-logo-linear.jpg", images: ["https://assets.punchdrink.com/wp-content/uploads/2019/04/Article-Lazy-Bird-Chicago-Hoxton-Best-New-Bars-Spring-Summer-2019.jpg", "https://ik.imagekit.io/youshould/default_7_SkbNi54z4.jpg", "https://asset.montecarlosbm.com/styles/hero_image_desktop_2x/public/media/orphea/sbm_bb_bar_0003_1_id47390_rsz_2.jpg?itok=IRiLDy9t"], theme: 'Jazz', email: 'premierbar@gmail.com', phone: '0620632391', address: '67 avenue du Départ', web: 'permierbar.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dolor malesuada, hendrerit nunc a, rhoncus ex. Duis finibus vitae ante vitae congue. Suspendisse nec orci tortor. In hac habitasse platea dictumst. Nunc velit risus, eleifend id nunc at. '},
  ]

  constructor() { }


  getBars() {
    return this.bars
  }

  getBar(id: number) {
    this.bars.forEach(bar => {
      if (bar.id == id){ 
        return bar;
      }
    });
  }

  loggBar(email: string) {
    this.bars.forEach(bar => {
      if (bar.email == email){ 
        return bar;
      }
    });
    return false;
  }

}