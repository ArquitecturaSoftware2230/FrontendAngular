import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login : FormGroup;

  constructor(private router: Router) {
    this.login = new FormGroup({
      tipoId : new FormControl('', Validators.required),
      Id : new FormControl('', Validators.required),
      contrasena : new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  redirectToHistoria(){
    this.router.navigate(['HistoriaClinica/Main/historia'])
  }

}
