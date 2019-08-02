import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  offer: any;

  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    if(this.route.snapshot.data['special']) {
      this.offer = this.route.snapshot.data['special'];
    }
    //console.log(this.offer);
  }

}
