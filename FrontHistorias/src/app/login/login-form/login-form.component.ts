import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UsuariosService } from 'src/app/shared/usuarios.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UsuariosService
  ) { }

  loginForm = new FormGroup({
    cedula: new FormControl(''),
    contrasenna: new FormControl('')
  });

  ngOnInit(): void {
  }

  iniciarSesion() {
    console.log("User to login... ")
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Token obtained ")
        if(response.token != '') {

          this.userService.getUserById(this.loginForm.value.cedula!).subscribe(
            (response) => {
              console.log("Login successful");
              localStorage.setItem('user', JSON.stringify(response.usuarios[0]));
              // console.log(localStorage.getItem('user'));
              // console.log(response.usuarios[0].rol.nombre.toLowerCase());
              this.router.navigate(['/'+response.usuarios[0].rol.nombre.toLowerCase()]);
            }
          );

        }else{
          alert("Not valid");
        }
      });

  }

}
