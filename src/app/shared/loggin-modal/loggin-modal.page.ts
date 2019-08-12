import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { UserService } from 'src/app/services/user/user.service';
import { BarService } from 'src/app/services/bar/bar.service';

@Component({
  selector: 'app-loggin-modal',
  templateUrl: './loggin-modal.page.html',
  styleUrls: ['./loggin-modal.page.scss'],
})
export class LogginModalPage implements OnInit {

  logger: { email: string, password: string, type: string} = {email: '', password: '', type: ''};

  constructor(
    public modaleController: ModalController, 
    public loggerService: LoggerService, 
    private userService: UserService, 
    private barService: BarService,
    public events: Events
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modaleController.dismiss({
      'dismissed': true
    });
  }

  logForm() {
    console.log('log!')
    switch (this.logger.type) {
      case "user" : 
        let user = this.userService.loggUser(this.logger.email); 
        console.log('user', user);
        (user)? this.loggerService.setData(user) : '';
        this.events.publish('user:logged', user);
        break;
      case "bar" :
        let bar = this.barService.loggBar(this.logger.email); 
        console.log(bar);
        (bar)? this.loggerService.setData(bar) : '';
        this.events.publish('user:logged', bar);
        break;
      default:
        console.log('void');
    }
    console.log("logged: ", this.loggerService.getData());
    this.dismiss();
  }
}
