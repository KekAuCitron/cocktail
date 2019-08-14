import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BarProfilePage } from './bar-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RateComponent } from './rate/rate.component';

const routes: Routes = [
  {
    path: '',
    component: BarProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BarProfilePage, RateComponent]
})
export class BarProfilePageModule {}
