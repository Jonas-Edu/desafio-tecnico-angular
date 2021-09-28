import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';



//Rota de desenvolvida//localhost:4200/clientes
const routes: Routes = [
  {
    path:'',
    component: ListaClientesComponent
  },

  {
    path: 'novo',
    component: NovoClienteComponent
  },
  {
    path: 'alterar/:idcliente',
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
