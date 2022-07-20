import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() enviarDados = new EventEmitter();

  list: Array<{nome: string, idade: number}> = [
    {nome: 'Victor', idade: 28},
    {nome: 'Pedro', idade: 39},
    {nome: 'Fulano', idade: 18},
    {nome: 'Ciclano', idade: 15},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }

}
