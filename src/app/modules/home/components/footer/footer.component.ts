import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentTasks: Array<TaskList> = JSON.parse(localStorage.getItem('taskList') || '[]')

  constructor() { }

  ngOnInit(): void {
  }

  removeAllTasks() {
    this.currentTasks = []
  }
}
