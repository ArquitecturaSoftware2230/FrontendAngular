import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inMenu : boolean = false;
  entidadLogin : boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig?.path)
    if(this.route.snapshot.routeConfig?.path == 'Menu' || this.route.snapshot.routeConfig?.path == 'Main'){
      this.inMenu = true
    }
    else{
      this.inMenu = false
    }

    if(this.route.snapshot.routeConfig?.path == 'LoginEntidad'){
      this.entidadLogin = true
    }
    else{
      this.entidadLogin = false
    }
  }

  redirectToLoginEntidad(){
    this.router.navigate(['HistoriaClinica/LoginEntidad'])
  }

  backToLogin(){
    this.router.navigate(['HistoriaClinica/LoginEntidad'])
  }

}
