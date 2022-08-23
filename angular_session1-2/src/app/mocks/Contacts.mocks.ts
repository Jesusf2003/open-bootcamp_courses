import { IContacts } from "../models/interfaces/Contacto.interface";

// Exportamos una lista simulada de contactos
export const CONTACTS: IContacts[] = [
  {
    id: 1,
    nombre: 'Martín',
    apellidos: 'San José',
    email: 'martin@correo.com',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Juan',
    apellidos: 'García López',
    email: 'juan@correo.com',
    edad: 30
  },
  {
    id: 3,
    nombre: 'Natalia',
    apellidos: 'Giménez López',
    email: 'natalia@correo.com',
    edad: 20
  }
];
