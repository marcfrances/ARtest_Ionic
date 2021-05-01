import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  slidersOpts ={
    zoom: {
      maxRatio:4
    }
  };

  constructor() { }

  ngOnInit() {
  }

}