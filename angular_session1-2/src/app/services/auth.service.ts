import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {

    let body = {
      email: email,
      password: password
    }

    // Devolvemos la respuesta del Obersvable cuando la petición
    // se ha completado, el componente suscrito accederá
    return this.http.post('Https://reqres.in/api/login', body);
  }
}
