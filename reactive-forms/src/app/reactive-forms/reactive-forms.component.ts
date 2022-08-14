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

  REGEX_EMAIL: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  REGEX_CPF: string = "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"

  // Instanciando um formulário e agrupando elementos internos
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.REGEX_EMAIL)]],
    cpf: ['', [Validators.required, Validators.pattern(this.REGEX_CPF)]]
  })

  ngOnInit(): void {
  }

  // Exibindo o valor inserido do campo de input do formulário
  submitForm(){
    //Só irá submeter quando o formulário inteiro for válido
    if(this.registerForm.valid){
      console.log(this.registerForm.value) //Exibe os valores preenchidos de todos os campos
      console.log(this.registerForm.value.firstName)
      console.log(this.registerForm.value.lastName)
    }
  }

}
