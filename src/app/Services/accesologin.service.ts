import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuarioModel} from '../models/usuario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AccesologinService {

  public titulo: string;
  constructor(private http: HttpClient) { }

  // Aqui nos dirijimos a la api por medio de la url y le enviamos los datos que obtenemos del formulario

  public  Get_Administrador(correo: string , password: string ): Observable<UsuarioModel[]>
  {
      return  this.http.get<[UsuarioModel]>('http://localhost:5100/Login/Verificacion/' + correo + '/' + password, {
        responseType: 'json'
      });
  }

  //con este metood hacemos que  cambie el texto del nav bar a sesion o cerrar sesion
  // dependiendo si estamos autenticados
  public Login(){
    if (sessionStorage.getItem('Nombre') === '' || sessionStorage.getItem('Nombre') == null || sessionStorage.getItem('Nombre') === 'undefined'){
      this.titulo = 'Iniciar Sesion';
    }else{
      this.titulo = 'Cerrar Sesion';
    }
    return this.titulo;
  }
  Autenticado(): boolean{
    let bandera = false;
    if (sessionStorage.getItem('Nombre') !== '' ){
      console.log('pasamos');
      bandera = true;
    }
    return bandera;
  }
}
