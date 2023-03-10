import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interface/usuario';
import { LoginService } from 'src/app/service/login.service';

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
    private service: LoginService
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
      const form = this.formulario.value
      const id = Math.floor(Date.now() * Math.random())
      const usuario: IUsuario = {
        id : id,
        nome: form.nome,
        email: form.email,
        senha: form.senha
      }
      this.service.cadastrar(usuario).subscribe(()=> {
        this.btnEntrar()
      })
    }
  }
}
