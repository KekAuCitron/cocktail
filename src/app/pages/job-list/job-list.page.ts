import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { JobOfferService } from 'src/app/services/jobOffer/job-offer.service';
import { BarService } from 'src/app/services/bar/bar.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {

  public jobOffers : [];
  

  constructor(
    private router: Router, 
    private dataService: DataService, 
    private jobOfferService: JobOfferService,
    public barService : BarService
  ) { }

  ngOnInit() {
    let jobOfferList = this.jobOfferService.getJobOffers();
    jobOfferList.forEach(function (jobOffer, index) {
      let bar = this.barService.getBar(jobOffer.barId);
      console.log(bar); 
      this.jobOffers[index] = ({offer: jobOffer, bar: bar});
      console.log(jobOffer);
    })
    console.log("jobOffers: ", this.jobOffers);

  }

  openOffer(offer) {
    this.dataService.setData(offer.id, offer);
    this.router.navigateByUrl('/offer/' + offer.id)
  }

}
