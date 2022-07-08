import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor() {}

  ionViewDidEnter() {
    this.creatMap();
  }

  async creatMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 2.9213,
          lng: 101.6559,
        },
        zoom: 15,
        devicePixelRatio: window.devicePixelRatio,
      }
    });

    this.addMarkers();
  }

  async addMarkers() {
    const marker: Marker =
      {
        coordinate: {
          lat: 2.9213,
          lng: 101.6559,
        },
        draggable: true
      };


    await this.map.addMarker(marker);
  }
}
