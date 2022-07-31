import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() emitRemoveAllTasks = new EventEmitter();

  currentTasks: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeAllTasksEvent(){
    if(this.currentTasks){
      this.emitRemoveAllTasks.emit(this.currentTasks)
    }
  }
}
