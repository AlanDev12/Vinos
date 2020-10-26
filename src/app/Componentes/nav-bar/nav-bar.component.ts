import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AccesologinService } from '../../Services/accesologin.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent{

  public titulo: string;
  private Timer =interval(100);

  //Cada componete tiene su clase para asi poder trabajar en el bank end

  constructor(private router: Router, private service: AccesologinService){
    this.Recargar();
  }
  public Seleccion(){

    if (this.titulo === 'Cerrar Sesion'){
        sessionStorage.setItem('Nombre', '');
        sessionStorage.setItem('Correo', '');
        sessionStorage.setItem('Id', '');
        this.titulo = this.service.Login();
    }
  }
  public  Recargar(){
    this.Timer.subscribe((u) =>{
      this.titulo = this.service.Login();
    });
  }
}
