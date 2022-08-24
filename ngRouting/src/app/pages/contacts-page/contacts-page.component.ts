import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (params: any) => {
        console.log('QueryParams: ', params.sexo);
      }
    );
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
