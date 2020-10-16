import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor(){
    this.lat = 43.1746;
    this.lng = -2.4125;
    this.zoom = 15;
    this.mapTypeId = 'hybrid';
  }

}
