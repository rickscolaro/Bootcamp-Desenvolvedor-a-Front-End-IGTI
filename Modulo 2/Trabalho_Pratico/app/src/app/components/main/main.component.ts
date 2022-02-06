import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { acrescimoItem, tamanhoItem } from './tipos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  
  tamanhos: tamanhoItem[] = [
    { description: '300 ml', done: false, id: 1 },
    { description: '500 ml', done: false, id: 2 },
  ];

  acrescimos: acrescimoItem[] = [
    { description: 'Leite condensado', done: false, id: 1 },
    { description: 'Banana', done: false, id: 2 },
    { description: 'Granola', done: false, id: 3 },
    { description: 'Morango', done: false, id: 4 },
    { description: 'Leite em pó', done: false, id: 5 },
    { description: 'Coco', done: false, id: 6 },
    { description: 'Castanha de caju', done: false, id: 7 },
  ];
  /*********************************/
  contador2: number = 0
  selectAcrescimo2?:tamanhoItem
  onSelect2(a:tamanhoItem): void{
    this.selectAcrescimo2 = a
    if (a.done == false) {
      this.contador2++;
    } else {
      this.contador2--;
    }
  }
  
  /**********************************/

  contador: number = 0;

  selectAcrescimo?: acrescimoItem;
  onSelect(i: acrescimoItem): void {
    this.selectAcrescimo = i;
    if (i.done == false) {
      this.contador++;
    } else {
      this.contador--;
    }
  }

  /***********************************/
  constructor() {}

  ngOnInit(): void {}
}
