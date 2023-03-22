import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interface/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  formulario! : FormGroup;

  submetido = false

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['',[ Validators.required,  Validators.email]],
      senha: ['', [Validators.required, Validators.pattern('^(?=.*?[!@#$%¨&*])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
    })
  }

  btnEntrar(){
    this.router.navigateByUrl("/login")
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
      this.service.cadastrar(usuario).subscribe(() => {
        this.router.navigateByUrl("/login")
      })
    }
  }

}
