import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, timeout } from 'rxjs';
import { ModalDeletarComponent } from 'src/app/components/modal-deletar/modal-deletar.component';
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

  open(id:number) {
    const modal = this._modalService.open(ModalDeletarComponent, { centered: true });
    modal.closed.subscribe(() => {
      this.service.deletarUsuario(id).subscribe(() => {
        this.getUsuarios()
        this.alert = true
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
