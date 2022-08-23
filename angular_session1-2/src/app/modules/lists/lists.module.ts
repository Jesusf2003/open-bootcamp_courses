import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';

@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    /*
      Exportamos aquellas clases (Componentes/pipes, services, etc)
      que queramos compartir a quién importe este módulo
    */
    // Exportamos aquellas clases (Componentes/pipes, services, etc) que queramos compartir a quién
    // importe este módulo
    ListaBasicaComponent
  ]
})
export class ListsModule { }
