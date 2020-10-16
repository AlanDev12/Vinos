import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

//Aqui Agregamos las importaciones para los forms
import {NgForOf} from '@angular/common';
import { NgForm } from '@angular/forms';

//importamos el servicio y nuestro Modelo
import { UsuarioModel } from '../../models/usuario.model';
import { AccesologinService } from '../../Services/accesologin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Aqui llamamos a nuestro Molde
  usuario:UsuarioModel =new UsuarioModel();

  constructor(private router: Router, private AccesoService: AccesologinService) {  }

  ngOnInit(): void {

  }

  //ESTE METODO NOS SIRVE PARA LLEVARNOS AL APARTADO DE REGISTRO
  
  public verRegistro(){
    this.router.navigate(['/registro']); //Aqui nos direcciona a la parte de registro
  }

  public login ( form: NgForm){

    if (form.invalid ){ // Aqui valida si el formulario tiene datos
      return;
    }
    this.AccesoService.Get_Administrador(this.usuario.correo, this.usuario.password).subscribe((data: UsuarioModel[]) => {
      data.forEach( info => {
        console.log(info.correo);
      });

    });
  }
}
