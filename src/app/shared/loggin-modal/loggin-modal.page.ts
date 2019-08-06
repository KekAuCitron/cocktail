import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loggin-modal',
  templateUrl: './loggin-modal.page.html',
  styleUrls: ['./loggin-modal.page.scss'],
})
export class LogginModalPage implements OnInit {

  constructor(public modaleController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modaleController.dismiss({
      'dismissed': true
    });
  }
}
