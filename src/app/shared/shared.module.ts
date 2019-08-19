import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer/footer.component';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header.component';


@NgModule({
  declarations: [ FooterComponent, ShrinkingSegmentHeaderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent, ShrinkingSegmentHeaderComponent]
})
export class SharedModule { }
