import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoggerService } from 'src/app/services/logger.service';
import { LogginModalPage } from '../loggin-modal/loggin-modal.page';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  userLogged : boolean = false;

  constructor (public modalController: ModalController,
              public loggerService: LoggerService) { 
    this.userLogged = this.loggerService.getData()? true : false;
  }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: LogginModalPage,
      cssClass: 'loggin-modal'
    });
    return await modal.present();
  }

}
