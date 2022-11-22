import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/citas.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(
    private citasService: CitasService
  ) { }

  data:any = {};

  ngOnInit(): void {

    console.log("Obtaining data...");

    this.citasService.getReportes().subscribe(
      (response) => {
        this.data = response;
        console.log("Data obtained");
      }
    );
  }

}
