import { Component, OnInit } from '@angular/core';
import { ModalController, Events, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from 'src/app/pages/register/register.page';

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
    private authService: AuthService,
    private alertService:  AlertService,
    private navCtrl: NavController,
    public events: Events
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modaleController.dismiss({
      'dismissed': true
    });
  }

  async registerModal() {
    this.dismiss();
    const registerModal = await this.modaleController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  logForm(form: NgForm){
    /*this.authService.login(form.value.email, form.value.type).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      }, 
      error => {
        console.log(error);
      },
      () => {
        this.dismiss();
        this.navCtrl.navigateRoot('/job-list');
      }
    )*/

    if (this.authService.login(form.value.email, form.value.type)) {
      this.alertService.presentToast("Logged In");
      this.dismiss();
      this.navCtrl.navigateRoot('/job-list');
    } else {
      this.alertService.presentToast("Identifiants incorrects");
    }
  }

}
