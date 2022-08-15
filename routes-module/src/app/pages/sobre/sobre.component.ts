import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res) //Acessando os parâmetros da rota sobre
    )

    this.activatedRoute.queryParams.subscribe(
      res => console.log(res) //Acessando os parâmetros da rota em uma querystring
    )

    // setInterval(() => {
    //   this.router.navigate(['404']); //Aqui não realiza refresh. É comum para fazer navegações internas de uma url
    //   // this.router.navigateByUrl('404'); //Aqui realiza refresh na página que foi navegada
    // }, 5000)
  }

}
