import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacts } from 'src/app/models/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  filterSex: string = 'todos';
  listContacts: IContacts[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactservice: ContactService
  ) { }

  ngOnInit(): void {
    // Obtenemos los Query Params
    this.route.queryParams.subscribe(
      (params: any) => {
        console.log('QueryParams: ', params.sexo);
        if (params.sexo) {
          this.filterSex = params.sexo;
          this.contactservice.getContacts(this.filterSex)
          ?.then(
            (lista) => this.listContacts = lista
          )
          .catch(
            (error) => console.log('Ha habido un error al obtener los contactos: ', error)
          )
          .finally(
            () => console.info('Petición de contactos terminada.')
          );
        }
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
