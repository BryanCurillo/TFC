import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  constructor(private http:HttpClient) { }
  private url='http://localhost:8080/api';

  getUsuariosAct():Observable<usuario[]>{

    return this.http.get<usuario[]>(this.url+"/UsuariosAct");
  }

  getUsuarioInc():Observable<usuario[]>{
    return this.http.get<usuario[]>(this.url+"/UsuariosInc");
  }

  getUpdateEstado(usu:usuario):Observable<number>{
    return this.http.put<number>(this.url+"/UsuariosEst/"+usu.usuId+"/"+usu.usuEstado,usu);
  }

  //activar o desactivar permisos de admistrador usuario
  putUpdateRol(usu:usuario):Observable<number>{
    return this.http.put<number>(this.url+"/UsuariosAdm/"+usu.usuId+"/"+usu.usuRol,usu);
  }
}
