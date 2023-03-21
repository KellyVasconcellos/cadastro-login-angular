import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, timeout } from 'rxjs';
import { ModalDeletarComponent } from 'src/app/components/modal-deletar/modal-deletar.component';
import { ModalEditarComponent } from 'src/app/components/modal-editar/modal-editar.component';
import { IUsuario } from 'src/app/interface/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

  usuarios : Array<IUsuario> = []

  listasUsuarios = new Subject<Array<IUsuario>>();

  alert = false

  mensagem  = ""

  constructor(
    private service: LoginService,
    private _modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.getUsuarios()

    this.listasUsuarios.subscribe((respostaSubject : Array<IUsuario>) => {
      this.usuarios = respostaSubject
    })
  }

  modalDeletar(id:number) {
    const modal = this._modalService.open(ModalDeletarComponent, { centered: true });
    modal.closed.subscribe(() => {
      this.service.deletarUsuario(id).subscribe(() => {
        this.getUsuarios()
        this.alert = true
        this.mensagem = "Usuário excluído com sucesso!"
        setTimeout(() => {
          this.alert = false
        }, 3000);
      })
    })
  }

  modalEditar(item: IUsuario) {
    const modal = this._modalService.open(ModalEditarComponent, { centered: true });
    modal.componentInstance.nome = item.nome
    modal.componentInstance.email = item.email
    modal.componentInstance.senha = item.senha

    modal.closed.subscribe((resposta) => {
      console.log(resposta)
      const usuario: IUsuario = {
        id: item.id,
        nome: resposta.nome,
        email: resposta.email,
        senha: resposta.senha,
      }
      this.service.editarUsuario(usuario).subscribe(() => {
        this.getUsuarios()
        this.alert = true
        this.mensagem = "Usuário alterado com sucesso!"
        setTimeout(() => {
          this.alert = false
        }, 3000);
      })
    })
  }

  getUsuarios() {
    this.service.getUsuarios().subscribe((respostaApi : Array<IUsuario>) => {
      this.listasUsuarios.next(respostaApi)
    })
  }




}
