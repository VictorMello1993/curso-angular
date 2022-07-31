import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    InputTextComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
