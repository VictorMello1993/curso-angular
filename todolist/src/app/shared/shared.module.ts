import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { InputTextComponent } from './input-text/input-text.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    InputTextComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    InputTextComponent
  ]
})
export class SharedModule { }
