import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements OnInit {

  listElement: Producto[] = [
    {
      nombre: "Leche",
      precio: 10,
      descripcion: "Leche entera"
    },
    {
      nombre: "Carne",
      precio: 20,
      descripcion: "Carne de cerdo"
    }
  ];

  loading: boolean = true;

  options: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeLoading() {
    this.loading = !this.loading;
  }

  chooseOption(option: number) {
    // El valor cambia, implica un cambio en los elementos renderizados
    this.options = option;
  }
}