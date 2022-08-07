import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  submitForm(form: NgForm){
    const {idade} = form.value

    if(form.valid){
      console.log(form.value)
    }
  }
}
