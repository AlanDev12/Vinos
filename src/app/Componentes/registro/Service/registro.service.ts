import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuarios } from '../Models/Registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  public insertUsser(Usuario): Observable<any> {
    return this.http.post('http://localhost:5100/insert/cliente', Usuario, {
      responseType: 'json'
    });
  }
  public  Get_Administrador(correo: string , password: string ): Observable<Usuarios[]>
  {
      return  this.http.get<Usuarios[]>('http://localhost:5100/Login/Verificacion/' + correo + '/' + password, {
        responseType: 'json'
      });
  }
}
