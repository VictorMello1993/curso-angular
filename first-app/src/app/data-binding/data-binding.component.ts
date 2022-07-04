import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  nome: string = 'Victor'
  idade: number = 28
  maisUm: number = 1
  checkedDisabled: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
}
