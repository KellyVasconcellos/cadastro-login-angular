import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario! : FormGroup;

  submetido = false
  entrar = true
  inscrever = false

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['',[ Validators.required,  Validators.email]],
      senha: ['', [Validators.required, Validators.pattern('^(?=.*?[!@#$%¨&*])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
    })
  }

  btnInscrever(){
    this.inscrever = true
    this.entrar = false
  }

  btnEntrar(){
    this.entrar = true
    this.inscrever = false
  }

  cadastrar():void {
    console.log(this.formulario.controls)
    this.submetido = true
    if (this.formulario.valid){
      alert("cadastro feito com sucesso")
    }
  }
}
