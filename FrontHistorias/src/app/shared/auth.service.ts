import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  login(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/login`,user, this.options);
  }



}
