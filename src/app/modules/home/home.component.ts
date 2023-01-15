import { Component, OnInit } from '@angular/core';
import { TaskList } from './models/task-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem('taskList') || '[]')

  ngOnInit(): void {
  }

}
