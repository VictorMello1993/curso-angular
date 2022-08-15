import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"}, //http://localhost:4200
  {path: "sobre/:id/:username", component: SobreComponent}, //http://localhost:4200/sobre
  {path: "404", component: PageErrorComponent}, //http://localhost:4200/404
  {path: "**", redirectTo: '404'}, //Rota coringa (rota inválida)
                                   // Se o usuário preencher a rota erroneamente, redirecionar para a rota http://localhost:4200/404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
