import { Component, OnInit, Input } from '@angular/core';
import { BarService } from 'src/app/services/bar/bar.service';
import { Bar } from 'src/app/models/bar';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  @Input() userRate;
  stars: any[];
  bar: any;

  constructor(private barService: BarService) { }

  ngOnInit() {
    this.stars = Array(this.userRate.rate).fill(0);
    this.bar = this.barService.getBar(this.userRate.barId);
  }

}
