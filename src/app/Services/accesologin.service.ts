import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AccesologinService {

  API_URI = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  

  // Aqui nos dirijimos a la api por medio de la url y le enviamos los datos que obtenemos del formulario

  public Get_Administrador(correo: string , password: string ): Observable<UsuarioModel[]>
  {
      return this.http.get<UsuarioModel[]>('http://localhost:3000/login/Usuario/Acceso/' + correo + '/' + password, {
        responseType: 'json'
      });
  }


  public Get_ListadoUser(){
    return this.http.get(`${this.API_URI}/Usuario/Listado`);
  }
  login(user: any){



  }



}
