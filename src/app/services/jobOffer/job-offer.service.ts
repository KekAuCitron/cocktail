import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  public jobOffers: {id: number, bar?: {id: number, establishmentName?: string, profilePicture?: string}, period?: {start?: string, end?: string}[], hourlyWage?: number}[] = [
    {
      id: 1,
      bar : {
        id: 2,
        establishmentName: 'La Grenouille Délurée',
        profilePicture: "https://www.francestickers.com/2926-thickbox/logo-bar-2.jpg"
      },
      period : [
        {start : '05/07 19:00', end : '05/07 23:00'}
      ],
      hourlyWage : 9.75
    },
    {
      id: 2,
      bar : {
        id: 1,
        establishmentName: 'Le Joyeux Luron',
        profilePicture: "https://image.freepik.com/vecteurs-libre/original-biere-lager-bar-logo-badge-illustration_1344-259.jpg"
      },
      period : [
        {start : '04/07 18:00', end : '05/07 01:00'},
        {start : '05/07 18:00', end : '06/07 01:00'}
      ],
      hourlyWage : 9.50
    },
    {
      id: 3,
      bar : {
        id: 3,
        establishmentName: 'Le Premier Bar Avant le Commencement',
        profilePicture: "https://st2.depositphotos.com/4397757/8127/v/950/depositphotos_81277088-stock-illustration-martini-cocktail-bar-logo-linear.jpg"
      },
      period : [
        {start : '05/07 22:00', end : '06/07 03:00'}
      ],
      hourlyWage : 10.50
    }
  ]

  constructor() { }

  getJobOffers() {
    return this.jobOffers;
  }

  getJobOffer(id: number) {
    this.jobOffers.forEach(jobOffer => {
      if (jobOffer.id == id){ 
        return jobOffer;
      }
    });
  }
}
