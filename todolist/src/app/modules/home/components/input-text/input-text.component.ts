import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Output() emitAddTaskItem = new EventEmitter();

  inputText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  //Essa é a função responsável por emitir o evento de keydown com ENTER para receber o nome da task digitado
  //Dessa forma, o content irá escutar esse evento e assim utilizar a lista de tasks para adicionar um item passado
  addTaskEvent(){
    this.inputText = this.inputText.trim()

    if(this.inputText){
      this.emitAddTaskItem.emit(this.inputText)
      this.inputText = ''
    }
  }
}
