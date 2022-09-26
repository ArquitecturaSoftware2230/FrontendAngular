import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entidad-menu',
  templateUrl: './entidad-menu.component.html',
  styleUrls: ['./entidad-menu.component.css']
})
export class EntidadMenuComponent implements OnInit {

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
