import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArLauncherPageRoutingModule } from './ar-launcher-routing.module';

import { ARLauncherPage } from './ar-launcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArLauncherPageRoutingModule
  ],
  declarations: [ARLauncherPage]
})
export class ArLauncherPageModule {}
