import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { JobOfferService } from 'src/app/services/jobOffer/job-offer.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

  public jobOffers;

  constructor(private router: Router, private dataService: DataService, private jobOfferService: JobOfferService) { }

  ngOnInit() {
    this.jobOffers = this.jobOfferService.getJobOffers();
  }

  openOffer(offer) {
    this.dataService.setData(offer.id, offer);
    this.router.navigateByUrl('/offer/' + offer.id)
  }

}
