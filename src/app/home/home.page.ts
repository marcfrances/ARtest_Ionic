import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController, private router:Router) {}

  async ARscene() {
    const modal = await this.modalCtrl.create({
      component: ARLauncherPage
    })
    await modal.present();
     
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

}

