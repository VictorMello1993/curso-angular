import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Arroz",
    "Feijão",
    "Ovo",
    "Batata"
  ]

  constructor(){ }

  foodList(){
    return this.list
  }

  foodListAdd(value: string){
    this.list.push(value);
  }
}
