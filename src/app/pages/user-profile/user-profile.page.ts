import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: User;
  tab = 'contact';
  userRates;
  userForm: FormGroup;
  editMode = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) { 
    this.userForm = this.fb.group({
      email: [{value: '', disabled: true}, Validators.required],
      phone: [{value: '', disabled: true}, Validators.required],
      address: [{value: '', disabled: true}, Validators.required],
      zip: [{value: '', disabled: true}, Validators.required],
      city: [{value: '', disabled: true}, Validators.required],
    })
  }

  ngOnInit() {
    this.user = this.authService.getLoggedUser();
    this.userRates = this.userService.getUserRates(this.user.id);
  }

  switchTab(type: string) {
    this.tab = type;
  }

  edit() {
    this.editMode = true;
    this.userForm.controls.email.enable();
    this.userForm.controls.phone.enable(); 
    this.userForm.controls.address.enable(); 
    this.userForm.controls.zip.enable(); 
    this.userForm.controls.city.enable(); 
  }
}
