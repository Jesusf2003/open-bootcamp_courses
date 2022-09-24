import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from '../models/Contact.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContacts, ...args: unknown[]): string {
    return `${contacto.nombre} ${contacto.apellidos}`;
  }
}
