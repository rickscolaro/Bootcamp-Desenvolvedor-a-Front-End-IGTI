import { Component, OnInit, Input } from '@angular/core';
import { acrescimoItem, tamanhoItem } from '../main/tipos';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao-componente.component.html',
  styleUrls: ['./selecao-componente.component.css'],
})
export class SelecaoComponenteComponent implements OnInit {

  @Input() title!: string;
  @Input() title2!: string;

  constructor() {}

  ngOnInit(): void {}
}
