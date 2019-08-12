import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { LogginModalPage } from '../loggin-modal/loggin-modal.page';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  userLogged : any;

  constructor (
    public modalController: ModalController,
    public loggerService: LoggerService,
    public events: Events) { 
      events.subscribe('user:logged', (user) => {
        this.userLogged = user;
      })
  }

  ngOnInit() {
    this.userLogged = this.loggerService.getData()? true : false;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LogginModalPage,
      cssClass: 'loggin-modal',
      showBackdrop : true,
      backdropDismiss: true
    });

    return await modal.present();
  }

}
