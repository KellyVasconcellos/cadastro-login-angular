import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interface/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

  usuarios! : Array<IUsuario>

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe((resposta : Array<IUsuario>) => {
      this.usuarios = resposta
    })
  }

}
