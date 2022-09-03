import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularyComponent } from './components/forms/formulary/formulary.component';
import { NestedFormComponent } from './components/forms/nested-form/nested-form.component';
import { ArrayFormComponent } from './components/forms/array-form/array-form.component';
import { ValidFormComponent } from './components/forms/valid-form/valid-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailsPageComponent,
    FormularyComponent,
    NestedFormComponent,
    ArrayFormComponent,
    ValidFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos nuestro módulo personalizado
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
