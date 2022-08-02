import { Component, OnInit } from '@angular/core';
import { IFoodList } from '../../module/food-list';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodList: IFoodList | any;

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: err => err
    }
    )

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => console.log(res)
    })
  }

}
