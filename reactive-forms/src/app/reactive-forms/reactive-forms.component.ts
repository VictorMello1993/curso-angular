import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  // Instanciando um formulário e agrupando elementos internos
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
  })

  ngOnInit(): void {
  }

  // Exibindo o valor inserido do campo de input do formulário
  submitForm(){
    console.log(this.registerForm.value) //Exibe os valores preenchidos de todos os campos
    console.log(this.registerForm.value.firstName)
    console.log(this.registerForm.value.lastName)
  }

}
