import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
