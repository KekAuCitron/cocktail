import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-loggin-modal',
  templateUrl: './loggin-modal.page.html',
  styleUrls: ['./loggin-modal.page.scss'],
})
export class LogginModalPage implements OnInit {

  logger = {};

  constructor(public modaleController: ModalController, public loggerService: LoggerService ) { }

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
    this.loggerService.setData(this.logger);
  }
}
