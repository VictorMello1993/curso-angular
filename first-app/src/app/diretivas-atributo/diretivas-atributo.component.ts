import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent implements OnInit {
  constructor() { }

  valor: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
    }, 2000)
  }
}
