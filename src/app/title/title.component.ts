import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit, OnChanges, OnDestroy{

  @Input() public title: string = "Meu neném é muito cheirosa e maravilhosa!"

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void { }
  ngOnDestroy(): void {
    console.log("Fui destruído, oh no!");

  }
}
