import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './view/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarComponent } from './view/cadastrar/cadastrar.component';
import { AreaLogadaComponent } from './view/area-logada/area-logada.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeletarComponent } from './components/modal-deletar/modal-deletar.component';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component';
import { AppComponent } from './app_inicial/app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    AreaLogadaComponent,
    ModalDeletarComponent,
    ModalEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
