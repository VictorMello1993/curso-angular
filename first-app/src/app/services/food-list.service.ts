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

  foodList(): Observable<Array<IFoodList>>{
    return this.http.get<Array<IFoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  // foodListAdd(value: string){
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  foodListAdd(value: string): Observable<IFoodList>{
    return this.http.post<IFoodList>(`${this.url}list-food`, {name: value})
                    .pipe(
                      res => res,
                      error => error)
  }

  // foodListAlert(value: string){
  //   return this.emitEvent.emit(value);
  // }

  foodListAlert(value: IFoodList){
    return this.emitEvent.emit(value);
  }

  foodListDelete(id: number): Observable<IFoodList>{
    return this.http.delete<IFoodList>(`${this.url}list-food/${id}`)
                    .pipe(
                      res => res,
                      error => error
                    )
  }

  foodListEdit(id: number, value: string): Observable<IFoodList>{
    return this.http.put<IFoodList>(`${this.url}list-food/${id}`, {name: value})
                    .pipe(
                      res => res,
                      error => error
                    )
  }
}
