import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { LogginModalPage } from 'src/app/shared/loggin-modal/loggin-modal.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formType = 'user';

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
    ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async loginModal() {
    this.dismiss();
    const loginModal = await this.modalController.create({
      component: LogginModalPage,
    });
    return await loginModal.present();
  }

  switchCase(type: string) {
    this.formType = type;
  }
}
