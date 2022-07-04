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
  imgSrc: string = "https://pbs.twimg.com/profile_images/1378748001129234435/25b-uJqe_400x400.jpg"
  imgTitle: string = "Avatar"

  constructor() { }

  ngOnInit(): void {
  }
}
