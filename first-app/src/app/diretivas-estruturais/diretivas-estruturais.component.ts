import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  condition: boolean = true
  conditionClick: boolean = true

  nome: string = 'pedro'

  list: Array<{nome: string, idade: number}> = [
    {nome: 'Victor', idade: 28},
    {nome: 'Felipe', idade: 32},
    {nome: 'Camilla', idade: 27},
    {nome: 'Humberto', idade: 42},
  ]

  onClickAddList(){
    this.list.push({nome: 'Fulano', idade: 50})
  }
  onClickEventList(index: number){
    this.list.splice(index, 1)
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(() => { //Criando uma função toogle automática de acordo com a renderização condicional
      this.condition = !this.condition
    }, 2000)
  }

  exibirOcultarComponentePorClick(){ //Criando uma função toogle de acordo com a renderização condicional pelo evento de click
    this.conditionClick = !this.conditionClick
  }
}
