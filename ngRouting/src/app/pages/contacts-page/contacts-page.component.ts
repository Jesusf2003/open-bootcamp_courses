import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacts } from 'src/app/models/Contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  listContacts: IContacts[] = [
    {
      id: 0,
      nombre: 'Martín',
      apellidos: 'San José',
      email: 'martin@correo.com',
      sexo: 'hombre'
    },
    {
      id: 1,
      nombre: 'Andrés',
      apellidos: 'García',
      email: 'andres@correo.com',
      sexo: 'hombre'
    },
    {
      id: 2,
      nombre: 'Ana',
      apellidos: 'Hernández',
      email: 'ana@correo.com',
      sexo: 'mujer'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Paso de información entre componentes a través del estado
  backToHome(contact: IContacts) {

    let navExtra: NavigationExtras = {
      state: {
        data: contact
      }
    }

    this.router.navigate(['/home'], navExtra);
  }
}
