import { Component, OnInit } from '@angular/core';
import { IFoodList, Operation } from '../../module/food-list';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodList: Array<IFoodList> = []

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: res => this.foodList = res,
      error: err => err
    }
    )

    this.foodListService.emitEvent.subscribe(
      res => {
        switch (res.operation) {
          case Operation.adition:
            alert(`Você adicionou ${res.name}`)
            return this.foodList.push(res)

          case Operation.edition:
            alert(`Você editou ${res.name}`)
            break;

          case Operation.delete:
            alert(`Você excluiu ${res.name}`);
            break;
        }

        return this.foodList
      }
    )
  }

  foodListDelete(id: number, value: string){
    return this.foodListService.foodListDelete(id).subscribe({
      next: res => {
        res.name = value
        res.operation = Operation.delete

        const index = this.foodList.findIndex(food => food.id === id)

        if(index !== -1){
          this.foodList.splice(index, 1)
        }

        this.foodListService.foodListAlert(res)

      },
      error: err => err
    }
    )
  }

  foodListEdit(id: number, value: string){
    return this.foodListService.foodListEdit(id, value).subscribe({
      next: res => {

        res.name = value
        res.operation = Operation.edition

        const index = this.foodList.findIndex(food => food.id === id)

        if(index !== -1){
          this.foodList[index].name = value
        }

        this.foodListService.foodListAlert(res)
      },

      error: err => err
    })
  }
}
