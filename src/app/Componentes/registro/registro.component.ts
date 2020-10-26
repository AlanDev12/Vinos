import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistroService} from './Service/registro.service';
import { Usuarios } from './Models/Registro';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{


  public Ussers: Usuarios[];
  public New: Usuarios;


  constructor(private router: Router, private api: RegistroService, private navegacion: NavBarComponent){
    this.New = {
      name: "",
      correo: "",
      contraseña: ""
    };

  }
   public Registro(form: NgForm){

    if (form.invalid ){ // Aqui valida si el formulario tiene datos
      return;
    }
    this.New.name = (document.getElementById("txtnombre") as HTMLInputElement).value;
    this.New.correo = (document.getElementById("txtemail") as HTMLInputElement).value;
    this.New.contraseña = (document.getElementById("txtcontra") as HTMLInputElement).value;
    this.api.insertUsser(this.New).subscribe(res =>{
      if (res !== 0){
        this.api.Get_Administrador(this.New.correo.toString(), this.New.contraseña.toString()).subscribe((data: Usuarios[]) => {
          data.forEach( info => {
            sessionStorage.setItem('Nombre', info.name);
            sessionStorage.setItem('Correo', info.correo);
            if (sessionStorage.getItem('Nombre') !== '' ){
              if (sessionStorage.getItem('Nombre') !== 'Admin'){
                this.router.navigate(['/home']);
                this.navegacion.Recargar();
              }
            }
          });
        });
      }else{
        alert('Sin registro');
      }
    });
   }
}
