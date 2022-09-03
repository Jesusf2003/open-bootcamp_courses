import { Component, OnInit } from '@angular/core';

// Ejemplo básico de Formulario Reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

  // Definimos nuestro formulario
  myForm: FormGroup = new FormGroup({});

  // Inyectamos la clase FormBuilder para construir el FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    // Iniciamos los campos del formulario y sus valores por defecto
    this.myForm = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );

    // Nos suscribimos a los cambios que ocurran en el formualrio y los mostramos por consola
    this.myForm.valueChanges.subscribe(
      console.log
    );
  }
}
