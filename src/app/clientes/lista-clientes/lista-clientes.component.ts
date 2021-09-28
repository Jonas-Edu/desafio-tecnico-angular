import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
// listagem de clientes cadastrados.
  listaClientes: any[] = [
    {
      nome: 'Eduardo', cpf: '111.111.11-00', idade:'33', telefone: '9-9999-9999', email: 'eduardo@gmail.com',
    },
    {
      nome: 'Sara', cpf: '111.222.11-00', idade:'20', telefone: '9-9999-9999', email: 'sara@gmail.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
