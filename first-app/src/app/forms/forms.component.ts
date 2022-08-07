import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foodList: Array<{food: string, price: number}> = [
    {food: 'Macarrão', price: 6.00},
    {food: 'Arroz', price: 5.25},
    {food: 'Feijão', price: 3.00},
    {food: 'Carne', price: 25.00},
  ]
}
