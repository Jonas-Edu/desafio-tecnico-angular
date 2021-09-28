import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  public mostrarmensagem = true;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
