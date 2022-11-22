import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`/gestor-usuarios/usuarios`);
  }

  getUserById(cedula:string): Observable<any> {
    return this.http.get<any>(`/gestor-usuarios/usuario/${cedula}`);
  }

  getListaUsuarios(tipo:string): Observable<any> {
    return this.http.get<any>(`/gestor-usuarios/listausuarios/${tipo}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`/registrar`, user);
  }

}
