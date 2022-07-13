import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent implements OnInit {
  constructor() { }

  valor: boolean = true;
  heightPx: string = '20px';
  backgroundColor: string = 'red';
  textColor: string = '#FFF';

  list: Array<{nome: string}> = []
  nome: string = '';

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor

      if(this.heightPx === '20px'){
        this.heightPx = '50px'
        this.backgroundColor = 'blue'
      }
      else{
        this.heightPx = '20px'
        this.backgroundColor = 'red'
      }

    }, 2000)
  }

  salvar(){
    this.list.push({nome: this.nome})
    this.nome = ''
  }
}
