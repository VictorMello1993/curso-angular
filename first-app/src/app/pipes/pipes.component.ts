import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  list: Array<{nome: string, idade: number, dataNascimento: Date}> = [
    {nome: 'Victor', idade: 28, dataNascimento: new Date(1993, 12, 15)},
    {nome: 'Felipe', idade: 32,  dataNascimento: new Date(1998, 11, 5)},
    {nome: 'Camilla', idade: 27,  dataNascimento: new Date(1995, 1, 12)},
    {nome: 'Humberto', idade: 42,  dataNascimento: new Date(1993, 1, 6)},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
