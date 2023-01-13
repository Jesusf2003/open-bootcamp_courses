import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask = {
    title: 'Título por defecto',
    description: 'Descripción por defecto',
    level: LEVELS.INFO,
    completed: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
