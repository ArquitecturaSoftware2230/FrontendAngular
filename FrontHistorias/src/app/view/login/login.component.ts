import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToCrearHistoria(){
    this.router.navigate(['HistoriaClinica/Main/Crear'])
  }

  redirectToHistoria(){
    this.router.navigate(['HistoriaClinica/Main/historia'])
  }

}
