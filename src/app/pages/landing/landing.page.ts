import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterPage } from '../register/register.page';
import { LogginModalPage } from 'src/app/shared/loggin-modal/loggin-modal.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {
    if (this.authService.getToken()) {
      this.navCtrl.navigateRoot('/menu/job-list');
    }
  }

  ngOnInit() {  }


  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  async login() {
    const loginModal = await this.modalController.create({
      component: LogginModalPage,
    });
    return await loginModal.present();
  }

}
