import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsuariosService
  ) { }

  userForm = new FormGroup({
    cedula: new FormControl(0, Validators.required),
    contrasenna: new FormControl('', Validators.required),
    rol_nombre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {

  }

  createUser(){
    console.log("User to add... ", this.userForm.value);
    this.userService.createUser(this.userForm.value).subscribe(
      (response) => {
        console.log("User created...")
        this.router.navigate(['/role_admin/usuarios']);
      }
    );
  }

}
