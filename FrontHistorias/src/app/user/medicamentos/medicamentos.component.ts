import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/shared/consultas.service';


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  prescripciones:any[] = [];
  user:any = {};

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

  constructor(
    private consultasService: ConsultasService
  ) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user')!);

    console.log("Getting prescriptions...");
    // this.consultasService.getHistoriaByUserId(this.user.cedula).subscribe(
    this.consultasService.getHistoriaByUserId('1000471976').subscribe(
      (response) => {
        console.log("Prescriptions obtained");
        this.prescripciones = response.prescripciones;
      }
    );
  }

  reclamar(medicamento:any, id:string){
    const span  = document.getElementById(id);
    span!.style.display = 'none';

    alert(`Reclamado con éxito: \n\n Se le notificará cuando el medicamento esté disponible: \n ${medicamento.nombre.toUpperCase()} `);
  }

  showCardContent(id: string){

    const collapsible = document.getElementById(id);
    const content = document.getElementById(id + 'Content');

    if(content?.style.display == 'none'){
      collapsible!.style.borderRadius = '30px 30px 0px 0px';
      content.style.display = 'block';
    }else{
      content!.style.display = 'none';
      collapsible!.style.borderRadius = '30px';
    }
  }
}
