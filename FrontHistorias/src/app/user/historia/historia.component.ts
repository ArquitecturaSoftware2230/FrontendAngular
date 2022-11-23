import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/shared/consultas.service';



@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(
    private router: Router,
    private consultasService: ConsultasService
  ) { }

  meses:string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  historia:any = {};

  ngOnInit(): void {

    const user = JSON.parse(localStorage.getItem('user')!);

    console.log("Getting history...");
    // this.consultasService.getHistoriaByUserId(user.cedula).subscribe(
    this.consultasService.getHistoriaByUserId('1000471976').subscribe(
      (response) => {
        this.historia = response;
        console.log("History obtained")
      }
    );

  }

  showCardContent(id: string) {

    const collapsible = document.getElementById(id);
    const content = document.getElementById(id + 'Content');

    if (content?.style.display == 'none') {
      collapsible!.style.borderRadius = '30px 30px 0px 0px';
      content.style.display = 'block';
    } else {
      content!.style.display = 'none';
      collapsible!.style.borderRadius = '30px';
    }
  }


}
