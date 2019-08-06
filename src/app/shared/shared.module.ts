import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [ FooterComponent, MenuComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent, MenuComponent]
})
export class SharedModule { }
