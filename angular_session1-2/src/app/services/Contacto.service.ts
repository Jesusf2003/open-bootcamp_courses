import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK
import { CONTACTS } from '../mocks/Contacts.mocks';
import { IContacts } from '../models/interfaces/Contacto.interface';

// Importamos observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() {}

  getContacts(): Promise<IContacts[]> {
    return Promise.resolve(CONTACTS);
  }

  getContactById(id: number): Observable<IContacts> | undefined {

    // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contact = CONTACTS.find( (contacto: IContacts) => contacto.id === id );

    // creamos un observable
    let observable: Observable<IContacts> = new Observable(observer => {
      observer.next(contact); // Emitir un valor a todo componente suscrito
      observer.complete(); // No emitimos más valores
    });

    if (contact) {
      return observable;
    } else {
      return;
    }
  }
}
