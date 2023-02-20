import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []
  task_name: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  addTask(): void {
    this.tasks.push(new Task(this.task_name, false))
    //clean form
    this.task_name = '';
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  updateStateTask(task: Task, i: number) {
    this.tasks[i].state = !task.state
  }

}
