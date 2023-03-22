import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogar! : FormGroup;
  mensagemErro = "";
  submetido = false;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogar = this.fb.group({
      email: ['',[ Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  btnInscrever(){
    this.router.navigateByUrl("/cadastrar")
  }

  logar():void {
    this.submetido = true
    if (this.formLogar.valid){
      const form = this.formLogar.value
      this.service.login(form.email).subscribe((resposta : any) => {
        console.log(resposta)
        if (resposta.length) {
          if (resposta[0].senha === form.senha) {
            this.router.navigateByUrl("/area-logada")
          } else {
            this.mensagemErro = "Usuário ou Senha inválida"
          }
        } else {
          this.mensagemErro = "Usuário ou Senha inválida"
        }
      })
    }
  }
}
