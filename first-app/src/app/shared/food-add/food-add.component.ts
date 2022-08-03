import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  // listAddItem(value: string){
  //   return this.foodListService.foodListAdd(value).subscribe({
  //     next: res => res,
  //     error: err => err
  //   })
  // }

  listAddItem(value: string){
    return this.foodListService.foodListAdd(value).subscribe({
      next: res => this.foodListService.foodListAlert(res),
      error: err => err
    })
  }
}
