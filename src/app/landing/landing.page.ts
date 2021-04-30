import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private router:Router
  ) {}

  ngOnInit() {
  }

  goToVendor(){
    this.router.navigate(['vendor'])
  }

  goToMap(){
    this.router.navigate(['map'])
  }

}
