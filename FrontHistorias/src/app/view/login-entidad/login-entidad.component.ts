import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-entidad',
  templateUrl: './login-entidad.component.html',
  styleUrls: ['./login-entidad.component.css']
})
export class LoginEntidadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToEntidadMenu(){
    this.router.navigate(['HistoriaClinica/Menu'])
  }

  redirectToLogin(){
    this.router.navigate(['HistoriaClinica/Login'])
  }

}
