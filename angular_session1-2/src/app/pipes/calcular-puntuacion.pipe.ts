import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../models/player.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(player: IPlayer, ...args: unknown[]): string {
    let totalPoint: number = 0;

    player.points.forEach(
      (point) => {
        totalPoint += point;
      }
    );
    return "" + player.name + " ha conseguido "+ totalPoint + " puntos en total.";
  }
}
