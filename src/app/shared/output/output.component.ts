import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();
  public listOut: Array<{nome: string, idade: number}> = [
    {
      nome: "Filipe",
      idade: 31
    },
    {
      nome: "Renata",
      idade: 28
    }
  ]
  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.listOut[event])
  }
}
