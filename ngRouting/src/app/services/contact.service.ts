import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';
import { IContacts } from '../models/Contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listContacts: IContacts[] = LISTA_CONTACTOS;

  constructor() { }

  getContacts(sexo?: string): Promise<IContacts[]> | undefined {
    if (sexo == 'hombre' || sexo == 'mujer') {
      let listFiltred: IContacts[] = this.listContacts.filter(
        (contact) => {
          contact.sexo == sexo;
        }
      );
      return Promise.resolve(listFiltred);
    } else if (sexo == 'todos') {
      return Promise.resolve(this.listContacts);
    } else {
      return Promise.reject('Filtro no válido');
    }
  }
}
