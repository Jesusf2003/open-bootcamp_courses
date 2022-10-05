import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRandomContact } from 'src/app/mocks/randomuser';
import { IContacts } from 'src/app/models/Contact.interface';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.css']
})
export class ContactDetailsPageComponent implements OnInit {

  id: any | undefined;
  contact: IRandomContact | undefined;
  filterPrevie: string = 'todos';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Vamos a leer los parámetros
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id;
        }
      }
    );

    // Vamos a leer también del State el contacto
    if (history.state.data) {
      this.contact = history.state.data;
    }

    if (history.state.filter) {
      this.filterPrevie = history.state.filter;
    }
  }
}
