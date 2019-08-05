import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { JobListPage } from '../job-list/job-list.page';
import { UserFormPage } from '../user-form/user-form.page';
import { BarFormPage } from '../bar-form/bar-form.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'job-list',
    component: JobListPage
  },
  {
    path: 'user-form',
    component: UserFormPage
  },
  {
    path: 'bar-form',
    component: BarFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
