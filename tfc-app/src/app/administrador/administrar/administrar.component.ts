import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit{
  //recuperar imagen de gato
  @ViewChild('gatoHor') miImagen: ElementRef;
  posX=0;
  screenWidth=0;
  constructor(private router:Router){
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(){
    //mover gato
    //setInterval(() => this.moverImagen(), 10);
  }



}
