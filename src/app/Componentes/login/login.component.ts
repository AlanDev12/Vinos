import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

//Aqui Agregamos las importaciones para los forms

import { NgForm } from '@angular/forms';

//importamos el servicio y nuestro Modelo
import { UsuarioModel } from '../../models/usuario.model';
import { AccesologinService } from '../../Services/accesologin.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Aqui llamamos a nuestro Molde
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private router: Router, private AccesoService: AccesologinService, private navegacion: NavBarComponent) {
    
  }

  //ESTE METODO NOS SIRVE PARA LLEVARNOS AL APARTADO DE REGISTRO

  public verRegistro(){
    this.router.navigate(['/registro']); //Aqui nos direcciona a la parte de registro
  }

  public login( form: NgForm){
    if (form.invalid ){ // Aqui valida si el formulario tiene datos
      return;
    }
// Aqui llamamos al metood que esta en la clase servicio y le pasamos los paremetros que pide ya cambio nos regresara los datos resultantes

    this.AccesoService.Get_Administrador(this.usuario.correo, this.usuario.password).subscribe((data: UsuarioModel[]) => {
      data.forEach( info => {
         sessionStorage.setItem('Nombre', info.name);
         sessionStorage.setItem('Correo', info.correo);
         sessionStorage.setItem('Id', info.id);
         if (sessionStorage.getItem('Nombre') !== ''){
           if (sessionStorage.getItem('Nombre') === 'Admin'){
            this.router.navigate(['/admin']);
            this.navegacion.Recargar();
           }else{
             alert('WEBOLAS');
           }
         }else{
           alert('Usuario Requerido');
         }
      });
    });
  }
}
