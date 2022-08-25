import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacts } from 'src/app/models/Contact.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;

  contactSelected: IContacts | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    // Comprobar si existe el token en el SessionStorage
    this.token = sessionStorage.getItem('token');

    // Leemos el estado del historial de navegación
    if (history.state.data) {
      console.log(history.state.data);
      this.contactSelected = history.state.data;
    }
  }

  goToContacts(): void {

    let navExtra: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.router.navigate( ['contacts'], navExtra);
  }
}
