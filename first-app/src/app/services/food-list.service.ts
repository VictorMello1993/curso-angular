import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Arroz",
    "Feijão",
    "Ovo",
    "Batata"
  ]

  constructor(){ }

  foodList(){
    return this.list;
  }

  foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

  foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
