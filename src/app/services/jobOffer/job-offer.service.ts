import { Injectable } from '@angular/core';
import { jobOffer } from 'src/app/models/jobOffer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  public jobOffers : jobOffer[] = [
    {
      id: 1,
      barId: 2,
      timePeriod : [
        {start : new Date('05/07 19:00'), end : new Date('05/07 23:00')}
      ],
      hourlyWage : 9.75,
      status: "disponible",
      description: ''
    },
    {
      id: 2,
      barId: 1,
      timePeriod : [
        {start : new Date('04/07 18:00'), end : new Date('05/07 01:00')},
        {start : new Date('05/07 18:00'), end : new Date('06/07 01:00')}
      ],
      hourlyWage : 9.50,
      status: "disponible",
      description: ""
    },
    {
      id: 3,
      barId: 3,
      timePeriod : [
        {start : new Date('05/07 22:00'), end : new Date('06/07 03:00')}
      ],
      hourlyWage : 10.50,
      status: "disponible",
      description: ""
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
