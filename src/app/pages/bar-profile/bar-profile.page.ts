import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar/bar.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bar } from 'src/app/models/bar';

@Component({
  selector: 'app-bar-profile',
  templateUrl: './bar-profile.page.html',
  styleUrls: ['./bar-profile.page.scss'],
})
export class BarProfilePage implements OnInit {

  bar: Bar;
  barRates;
  tab='coordonnees';
  barForm: FormGroup;
  editMode = false; 

  /*bar = {
    establishmentName: 'Le Joyeux Luron',
    theme: 'Gaitée',
    email: 'joyeuxluron@gmail.com',
    phone: '0745258414',
    address: '12 rue du Bonheur',
    description: '',
    website: 'joyeux-luron.com',
    images: [{url: "../../assets/images/bar1.jpg"}, {url: "../../assets/images/bar2.jpg"}, {url: "src/assets/images/bar3.jpg"}]
  };*/

  constructor(
    private barService: BarService,
    private fb: FormBuilder,
    private AuthService: AuthService) {
      this.barForm = this.fb.group({
        email: [{value: '', disabled: true}, Validators.required],
        phone: [{value: '', disabled: true}, Validators.required],
        address: [{value: '', disabled: true}, Validators.required],
        theme: [{value: '', disabled: true}, Validators.required],
        web: [{value: '', disabled: true}, Validators.required],
      })
  }

  ngOnInit() {
    this.bar = this.AuthService.getLoggedUser();
    this.barRates = this.barService.getBarRates(this.bar.id);
    console.log(this.bar);
  }

  switchTab(type: string) {
    this.tab = type;
  }

  edit() {
    this.editMode = true;
    this.barForm.controls.email.enable();
    this.barForm.controls.phone.enable(); 
    this.barForm.controls.address.enable(); 
    this.barForm.controls.theme.enable(); 
    this.barForm.controls.web.enable(); 
  }

}
