import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  myArrayForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myArrayForm = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        telefonos: this.formBuilder.array([]) // Inicializamos la lista de teléfonos vacía
      }
    );
  }

  // Método Getter para obtener el FormArray de la lista de teléfonos
  get telefonosForm(): FormArray {
    return this.myArrayForm.get('telefonos') as FormArray;
  }

  // Método para añadir teléfonos a la lista
  addTelefono() {

    // Creamos un grupo de teléfono
    const telefono = this.formBuilder.group(
      {
        prefijo: '',
        numero: ''
      }
    );

    // Añadimos el grupo a la lista de teléfonos
    this.telefonosForm.push(telefono);
  }

  // Método para eliminar de la lista
  deleteTelefono(index: number) {
    this.telefonosForm.removeAt(index);
  }
}
