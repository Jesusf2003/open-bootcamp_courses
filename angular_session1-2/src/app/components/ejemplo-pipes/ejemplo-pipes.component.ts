import { Component, OnInit } from '@angular/core';
import { IContacts } from 'src/app/models/interfaces/Contacto.interface';
import { IPlayer } from 'src/app/models/player.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,3,10);
  change: boolean = true;
  name: string = 'Martín';
  number_pi: number = 3.1415926535897;
  carPrice: number = 100;
  person: IContacts = {
    id: 0,
    nombre: 'Martín',
    apellidos: 'San José',
    edad: 30,
    email: 'martin@imaginagroup.com'
  }
  cant: number = 35;
  longText: string = 'asdsdwedaeqwds dasdadwe das das wdasdsa d asd';

  // Ejemplo para Pipe Calcular Puntuación
  player1: IPlayer = {
    name: 'Martín',
    points: [10, 30, 40, 0]
  }

  player2: IPlayer = {
    name: 'Pepe',
    points: [0, 80, 10, 5]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat() {
    return this.change ? 'shortDate' : 'fullDate';
  }

  changeFormat() {
    this.change = !this.change;
  }
}
