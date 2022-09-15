import { Component, OnInit } from '@angular/core';

// Importamos de Reactive Forms para crear un formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  myFormNested: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    // Agrupación para teléfonos
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo: '',
        numero: ''
      }
    );

    const telefonoMovil = this.formBuilder.group(
      {
        prefijo: '',
        numero: ''
      }
    );

    // Agrupación del formulario que contiene dos agrupaciones
    this.myFormNested = this.formBuilder.group(
      {
        fijo: telefonoFijo,
        movil: telefonoMovil
      }
    );
  }
}
