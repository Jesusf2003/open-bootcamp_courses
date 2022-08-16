import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';
  usuario = '@fernando';

  /* Función que se ejecutará cuando se pulse un botón */
  getMessageFromComponent(evento: String) {
    alert(evento);
  }
}