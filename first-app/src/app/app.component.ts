import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],

  template: `
    <!--
    <app-title *ngIf="!destruido"></app-title>
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <br/>
    <br/>
    <button (click)="destruirComponente()">Destruir componente</button>
    <br/>
    <br/>
    <app-data-binding></app-data-binding>
    -->
    <!--<app-diretivas-estruturais>-->
    <app-diretivas-atributo></app-diretivas-atributo>
    <router-outlet></router-outlet>
  `
})
// Conhecendo ciclo de vida do Angular
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  valor: number = 1
  destruido: boolean = true

  adicionar(): number{
    return this.valor += 1
  }

  destruirComponente() {
    this.destruido = true
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
}
