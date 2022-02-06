import { Injectable } from '@angular/core';
import { IProduto } from '../produto';

interface IItemPedido {
  produto: IProduto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  
  itens: IItemPedido[] = [];

  constructor() {}

  adicionaProduto(produto: IProduto) {
    /* Para cada item verifica se o produto é igual ao produto adicionado */
    const item = this.itens.find((item) => item.produto.descricao === produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1,
      });
    }
  }

  getQuantidadeTotal() {
    let quantidade = 0;
    for (let item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }

  getValorTotal() {
    let valor = 0;
    for (let item of this.itens) {
      valor += item.quantidade * item.produto.preco;
    }
    return valor;
  }

  limpaPedido() {
    this.itens = [];
  }
}
