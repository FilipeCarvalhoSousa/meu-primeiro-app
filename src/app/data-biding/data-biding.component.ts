import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public nome: string = ""
  public idade: number = 31
  public resultado: string = this.idade > 30 ? "Sim" : "Não"

  public validador: boolean = false;
  public imagemSrc: string = "https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg"
  public imgTitle: string = "Leão"

  public position: { x: number, y: number } = { x: 0, y: 0}
  public alertaInfo(valor: MouseEvent) {

  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }
}


