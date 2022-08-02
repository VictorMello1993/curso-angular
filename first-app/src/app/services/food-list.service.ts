import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IFoodList } from '../module/food-list';

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

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient){ }

  foodList(): Observable<IFoodList>{
    return this.http.get<IFoodList>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

  foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
