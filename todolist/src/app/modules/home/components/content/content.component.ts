import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  tasks: Array<{description: string, checked: boolean}> = []

  ngOnInit(): void {
  }

  setEmitTaskItem(event: string){
    return this.tasks.push({description: event, checked: false})
  }

  removeTask(index: number){
    this.tasks.splice(index, 1)
  }

  removeAllTasks(){
    this.tasks = []
  }
}
