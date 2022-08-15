import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res) //Acessando os parâmetros da rota sobre
    )

    this.activatedRoute.queryParams.subscribe(
      res => console.log(res) //Acessando os parâmetros da rota em uma querystring
    )
  }

  ngOnInit(): void {
  }

}
