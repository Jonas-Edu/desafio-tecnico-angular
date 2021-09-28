import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';


@NgModule({
  declarations: [
    ListaClientesComponent,
    NovoClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
