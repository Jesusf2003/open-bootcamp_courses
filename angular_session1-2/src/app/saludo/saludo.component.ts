import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  style: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit del componente saludo");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CAMBIO: Valor anterior: ", changes['nombre'].previousValue);
    console.log("CAMBIO: Valor anterior: ", changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    console.log("ngOnDetroy. El componente desaparece");
  }

  setMessageToComponent(): void {
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`);
  }
}