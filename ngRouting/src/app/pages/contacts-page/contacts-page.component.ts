import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IRandomContact, Results } from 'src/app/mocks/randomuser';
import { IContacts } from 'src/app/models/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  filterSex: string = 'todos';
  listContacts: IContacts[] = [];
  listRandomContacts: IRandomContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomContactService: RandomUserService
  ) { }

  ngOnInit(): void {
    // Obtenemos los Query Params
    this.route.queryParams.subscribe(
      (params: any) => {
        console.log('QueryParams: ', params.sex);
        if (params.sex) {
          this.filterSex = params.sex;
          if (params.sex === 'female' || params.sex === 'male') {
            // Implementación para obtener la lista de contactos aleatoria
            this.randomContactService.getRandomContacts(10, params.sex).subscribe(
              {
                next: (response: Results) => {
                  response.results.forEach(
                    (randomContact: IRandomContact, index: number) => {
                      this.listRandomContacts.push(randomContact)
                    }
                  )
                  console.log(this.listRandomContacts);
                },
                error: (error) => console.error(error),
                complete: () => console.info('Petición de random contacts terminada')
              }
            );
          }
        } else {
          // Implementación para obtener la lista de contactos aleatoria
          this.randomContactService.getRandomContacts(10).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach(
                  (randomContact: IRandomContact, index: number) => {
                    this.listRandomContacts.push(randomContact)
                  }
                )
                console.log(this.listRandomContacts);
              },
              error: (error) => console.error(error),
              complete: () => console.info('Petición de random contacts terminada')
            }
          );
        }
      }
    );
  }

  // Paso de información entre componentes a través del estado
  backToHome(contact: IRandomContact) {
    let navExtra: NavigationExtras = {
      state: {
        data: contact
      }
    }
    this.router.navigate(['/home'], navExtra);
  }
}
