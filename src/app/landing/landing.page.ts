import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ModalController } from '@ionic/angular'
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalCtrl: ModalController, private router:Router
  ) {}

  ngOnInit() {
  }

  goToVendor(){
    this.router.navigate(['vendor'])
  }

  goToMap(){
    this.router.navigate(['map'])
  }

  async ARscene() {
    const modal = await this.modalCtrl.create({
      component: ARLauncherPage
    })
    await modal.present();
     
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

  gotoAR(){
    this.router.navigate(['ar-launcher']);
  }

}