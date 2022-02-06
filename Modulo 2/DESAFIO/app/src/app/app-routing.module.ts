import { PedidoComponent } from './pedido/pedido.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'pedido', component: PedidoComponent },
  /*Quando não tiver onde ir cai direto no cardapio */
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
