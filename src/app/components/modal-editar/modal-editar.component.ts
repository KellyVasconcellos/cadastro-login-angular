import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss']
})
export class ModalEditarComponent implements OnInit {

  formEditar! : FormGroup;
  mensagemErro = "";
  submetido = false;

  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEditar = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['',[ Validators.required,  Validators.email]],
      senha: ['', [Validators.required, Validators.pattern('^(?=.*?[!@#$%¨&*])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
    })
  }

  editar():void {
    console.log(this.formEditar.controls)
    this.submetido = true
    if (this.formEditar.valid){
      const form = this.formEditar.value
      const usuario: any = {
        nome: form.nome,
        email: form.email,
        senha: form.senha
      }
      this.modal.close(usuario)
    }
  }

}
