import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input()
  title = 'Olá mundo'

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('O valor foi alterado com sucesso.')
  }

  ngOnInit(): void {
    // this.title = 'Blabla'
  }
}
