import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos empleados de Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
