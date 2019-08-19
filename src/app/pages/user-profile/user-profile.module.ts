import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserProfilePage } from './user-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RateComponent } from './rate/rate.component';
import { ScrollVanishDirective } from 'src/app/directives/scroll-vanish.directive';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [UserProfilePage, RateComponent, ScrollVanishDirective]
})
export class UserProfilePageModule {}
