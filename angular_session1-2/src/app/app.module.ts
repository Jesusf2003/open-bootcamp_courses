import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Módulos Angular Material

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { SaludoComponent } from './saludo/saludo.component';

// Módulos personalizados
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularyComponent } from './components/forms/formulary/formulary.component';
import { NestedFormComponent } from './components/forms/nested-form/nested-form.component';
import { ArrayFormComponent } from './components/forms/array-form/array-form.component';
import { ValidatedFormComponent } from './components/forms/validated-form/validated-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularyComponent,
    NestedFormComponent,
    ArrayFormComponent,
    ValidatedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importamos nuestro módulo personalizado
    ListsModule,
    // Importamos el módulo HttpClientModule
    HttpClientModule,
    // Importamos Reactive FormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    // Importamos los módulos de Angular Material que usamos en los formularios
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
