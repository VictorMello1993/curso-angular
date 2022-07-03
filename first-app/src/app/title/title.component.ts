import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  title = 'Olá mundo'

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('O valor foi alterado com sucesso.')
  }

  ngOnInit(): void {
    this.title = 'Bem-vindo'
  }

  ngOnDestroy(): void {
    console.log('Componente title destruído com sucesso')
  }
}
