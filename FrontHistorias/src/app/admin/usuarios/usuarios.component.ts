import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsuariosService
  ) { }

  allUsers: any[] = [];
  usuarios:any[] = [];
  admins:any[] = [];

  ngOnInit(): void {

    console.log("Getting users...");
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log("Users received");
        this.allUsers = response.usuarios;
        this.usuarios = this.allUsers.filter((usuario) => usuario.rol.nombre != 'ROLE_ADMIN' && usuario.rol.nombre != 'ROLE_MINISTERIO');
        this.admins = this.allUsers.filter((usuario) => usuario.rol.nombre == 'ROLE_ADMIN');
      }
    );
  }

  deleteUser(id:number){

    //LLamando al servicio
    // this.userService.deleteUser(id).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.ngOnInit();
    //   }
    // );


    //Simulando llamada al servicio
    this.allUsers = this.allUsers.filter((usuario) => usuario.id != id);
    this.usuarios = this.allUsers.filter((usuario) => usuario.rol.nombre != 'ROLE_ADMIN' && usuario.rol.nombre != 'ROLE_MINISTERIO');
    this.admins = this.allUsers.filter((usuario) => usuario.rol.nombre == 'ROLE_ADMIN');
    console.log("User deleted: ", id);;

  }

  expandUsers(id: string){

    let expandible = document.getElementById(id);
    if(expandible?.style.display == 'none'){
      let supressed = document.querySelectorAll('.supressed');
      Array.from(supressed).filter((element) => element.id != id).forEach((element) => {element.setAttribute('style', 'display: none')});
      expandible!.style.display = 'block';
    }else{
      expandible!.style.display = 'none';
    }
  }

  navigateToCreateUser(){
    this.router.navigate(['/role_admin/crearusuario']);
  }
}
