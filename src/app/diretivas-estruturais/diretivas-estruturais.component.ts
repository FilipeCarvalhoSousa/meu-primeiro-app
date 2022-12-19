import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public filipeses: boolean = true;
  public conditionClick: boolean = true;
  public listItens: Array<{ nome: string, idade: number, sexo: string }> = [
    { nome: "Filipe Carvalho", idade: 31, sexo: "M"},
    { nome: "Renata Carvalho", idade: 28, sexo: "F"}
  ]

  public nome: string = 'Filipe';

  constructor() {}

  ngOnInit(): void {
    setInterval(()=>{
      if (this.filipeses) {
        this.filipeses = false
      } else {
        this.filipeses = true
      }

    }, 1000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList() {
    this.listItens.push({nome: "Pasta", idade: 2, sexo: "Italiano"})
  }

  public onClickEvent(e: number) {
    this.listItens.splice(e, 1)
  }

}
