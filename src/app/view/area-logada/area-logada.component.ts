import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeletarComponent } from 'src/app/components/modal-deletar/modal-deletar.component';
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
    private router: Router,
    private service: LoginService,
    private _modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe((resposta : Array<IUsuario>) => {
      this.usuarios = resposta
    })
  }

  open() {
    const modal = this._modalService.open(ModalDeletarComponent, { centered: true });
    modal.closed.subscribe(() => {
      this.service.deletarUsuario(952121708953).subscribe(() => {
        this.router.navigateByUrl("/area-logada")
      })
    })
  }

}
