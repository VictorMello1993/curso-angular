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

  position: {x: number, y: number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void {
  }

  alertaInfo(valor: MouseEvent){
    console.log(valor)
  }

  mouseMoveEventTeste(event: MouseEvent){
    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }
}
