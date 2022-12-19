import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-data-biding></app-data-biding>
    <router-outlet></router-outlet> -->
   <!--  <app-diretivas-estruturais></app-diretivas-estruturais> -->
   <!-- <app-diretivas-atributos>
    <h1>Olá</h1>
    <hr />
    <h3>Tudo bem?</h3>
   </app-diretivas-atributos>
   <app-diretivas-atributos></app-diretivas-atributos> -->
   <app-input [contador]="addValue">

   </app-input>
   <button (click)="add()">Add!</button>
   <hr />
   <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h2>{{ getDados.idade }}</h2>
   </ng-template>

   <app-output (enviarDados)="setDados($event)"></app-output>
  `
})
export class AppComponent implements OnInit{
  public addValue:number = 0;

  public getDados: {nome: string, idade: number} | undefined;
  constructor() {}

  ngOnInit(): void {}

  public add() {
    this.addValue += 1
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event
  }
}
