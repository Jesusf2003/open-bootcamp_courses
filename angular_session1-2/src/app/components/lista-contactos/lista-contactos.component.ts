import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacts } from 'src/app/models/interfaces/Contacto.interface';
import { ContactoService } from 'src/app/services/Contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  listaContactos: IContacts[] = [];
  contactoSeleccionado: IContacts | undefined;

  // Subscripción de servicio
  subs: Subscription | undefined;
  // Inyectamos en el constructor el servicio de contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
    this.contactoService.getContacts()
    .then(
      (lista: IContacts[]) => this.listaContactos = lista
    )
    .catch(
      (error) => console.error("Error al recuperar la lista de contactos: "+ error
    ))
    .finally(() => console.log("La petición de lista de contactos terminada."));

    console.table(this.listaContactos);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  getContactById(id: number) {
    // console.log('Obtener info de contacto: '+ id);
    this.subs = this.contactoService.getContactById(id)
    ?.subscribe(
      (contacto: IContacts) => this.contactoSeleccionado = contacto
    );
  }
}
