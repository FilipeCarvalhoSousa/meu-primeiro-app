import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {
  public valor: boolean = true;
  public altura: string = "20px";
  public backgroundColor: string = "green";
  public nome: string = ""
  public listNomes: Array<{nome: string}> = []

  public date: Date = new Date;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }

      if (this.altura == "20px") {
        this.altura = "50px"
        this.backgroundColor = "aquamarine"
      } else {
        this.backgroundColor = "pink"
        this.altura = "20px"
      }
    }, 5000)

  }

  public guardarNome(): void {
    this.listNomes.push({nome: this.nome})
    this.nome = ""
  }
}
