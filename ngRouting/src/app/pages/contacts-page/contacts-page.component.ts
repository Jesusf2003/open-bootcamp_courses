import { Component, OnInit } from '@angular/core';
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
      email: 'martin@correo.com'
    },
    {
      id: 1,
      nombre: 'Andrés',
      apellidos: 'García',
      email: 'andres@correo.com'
    },
    {
      id: 2,
      nombre: 'Ana',
      apellidos: 'Hernández',
      email: 'ana@correo.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
