import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements DoCheck {

  constructor() { }
  ngDoCheck(): void {
    this.setLocalStorage()
  }

  tasks: Array<TaskList> = JSON.parse(localStorage.getItem('taskList') || '[]')

  addTask(event: string){
    return this.tasks.push({description: event, checked: false})
  }

  removeTask(index: number){
    this.tasks.splice(index, 1)
  }

  removeAllTasks(){
    this.tasks = []
  }

  setLocalStorage(){
    if(this.tasks){
      localStorage.setItem('taskList', JSON.stringify(this.tasks))
    }
  }
}
