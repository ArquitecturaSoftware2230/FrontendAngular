import { Component, OnInit } from '@angular/core';
import {Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

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
