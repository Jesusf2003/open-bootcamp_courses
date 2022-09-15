import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.css']
})
export class ValidatedFormComponent implements OnInit {

  myValidForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myValidForm = this.formBuilder.group(
      {
        nombre: [
          '',
          Validators.required
        ],
        apellidos: '',
        // Campo obligatorio con valores mínimos y máximos
        edad: [
          '',
          Validators.compose(
            [
              Validators.required,
              Validators.min(18),
              Validators.max(99)
            ]
          )
        ],
        // Campo obligatorio y de tipo email
        email: [
          '',
          Validators.compose(
            [
              Validators.required,
              Validators.email
            ]
          )
        ],
        // Campo obligatorio y con expresión regular
        password: [
          '',
          Validators.compose(
            [
              Validators.required,
              Validators.pattern('[a-zA-Z]*')
            ]
          )
        ],
        // Campo boolean con true como obligatorio
        acepta: [
          false,
          Validators.requiredTrue
        ]
      }
    );
  }

  get nombre() {
    return this.myValidForm.get('nombre');
  }

  get apellidos() {
    return this.myValidForm.get('apellidos');
  }

  get edad() {
    return this.myValidForm.get('edad');
  }

  get email() {
    return this.myValidForm.get('email');
  }

  get password() {
    return this.myValidForm.get('password');
  }

  get acepta() {
    return this.myValidForm.get('acepta');
  }

  // Método de Submit del formulario
  sendForm() {
    // Controlamos que formulario sea válido
    if (this.myValidForm.value) {
      console.log(this.myValidForm.value);
      // Resetear los campos del formulario
      this.myValidForm.reset();
    }
  }
}
