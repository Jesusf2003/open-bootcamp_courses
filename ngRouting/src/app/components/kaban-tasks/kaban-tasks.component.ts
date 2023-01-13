import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/Task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.css'],
})
export class KabanTasksComponent {

  todoTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones en Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds con Angular CLI',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.INFO
    }
  ];

  doneTasks: ITask[] = [
    {
      title: 'Configuración IDE',
      description: 'Configurar e instalar plugins den Visual Studio Code',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar Angular CLI',
      description: 'Instalar con NPM el Angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Hola Mundo',
      description: 'Crear con Angular CLI un proyecto inicial',
      completed: true,
      level: LEVELS.URGENT
    },
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
