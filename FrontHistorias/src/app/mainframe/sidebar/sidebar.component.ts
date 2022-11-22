import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  selectedMenu:string[] = [];
  user:any = {
    role: 'afiliado'
  };

  menuUser:string[] = [
    'Historia Clinica',
    'Citas',
    'Medicamentos',
    'Configuracion'
  ];

  menuAdmin:string[] = [
    'Usuarios',
    'Configuracion'
  ];

  menuMinisterio:string[] = [
    'Reportes',
    'Configuracion'
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user')!);

    if(this.user.rol.nombre === 'afiliado'){
      this.selectedMenu = this.menuUser;
    }
    if(this.user.rol.nombre.toLowerCase() === 'role_admin'){
      this.selectedMenu = this.menuAdmin;
    }
    if(this.user.rol.nombre.toLowerCase() === 'ministerio'){
      this.selectedMenu = this.menuMinisterio;
    }

  }

  logout(){
    this.router.navigate(['/login']);
  }


}
