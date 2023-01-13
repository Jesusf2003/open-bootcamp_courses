import { LOCALE_ID, NgModule } from '@angular/core';
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

// Módulos de angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); // Registramos el LOCALE_ID de 'es' para poder usarlos en los pipe

import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { ExampleAnimationComponent } from './components/example-animation/example-animation.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularyComponent,
    NestedFormComponent,
    ArrayFormComponent,
    ValidatedFormComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    ExampleAnimationComponent,
    TaskComponent
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
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    // Registramos el Locale de ES para que los PIPES salgan en Español
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
