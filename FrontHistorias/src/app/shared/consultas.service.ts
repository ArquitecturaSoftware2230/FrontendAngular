import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  data: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getHistoriaByUserId(cedula: string): Observable<any> {
    return this.http.get<any>(`/consulta/consultas/historia/${cedula}`);
  }

}
