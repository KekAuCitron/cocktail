import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

  public jobList: {id: number, bar: string, period: {start: string, end: string}[], hourlyWage: number}[] = [
    {
      id: 1,
      "bar" : 'Le Joyeux Luron',
      "period" : [
        {"start" : '05/07 19:00', "end" : '05/07 23:00'}
      ],
      "hourlyWage" : 9.75
    },
    {
      id: 2,
      "bar" : 'La Grenouille Délurée',
      "period" : [
        {"start" : '04/07 18:00', "end" : '05/07 01:00'},
        {"start" : '05/07 18:00', "end" : '06/07 01:00'}
      ],
      "hourlyWage" : 9.50
    },
    {
      id: 3,
      "bar" : 'Le  Premier Bar Avant le Début',
      "period" : [
        {"start" : '05/07 22:00', "end" : '06/07 03:00'}
      ],
      "hourlyWage" : 10.50
    }
  ]


  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  openOffer(offer) {
    this.dataService.setData(offer.id, offer);
    this.router.navigateByUrl('/offer/' + offer.id)
  }

}
