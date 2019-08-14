import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  @Input() barRate;
  stars: any[];
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.stars = Array(this.barRate.rate).fill(0);
    this.user = this.userService.getUser(this.barRate.userId);
  }

}
