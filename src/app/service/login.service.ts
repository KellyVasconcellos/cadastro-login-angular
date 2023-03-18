import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interface/usuario';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUsuario = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient) { }

  cadastrar(usuario: IUsuario) {
    return this.http.post<IUsuario>(this.apiUsuario, usuario)
  }

  login(email: string) {
    return this.http.get<IUsuario>(`${this.apiUsuario}?email=${email}`)
  }

  getUsuarios() {
    return this.http.get<Array<IUsuario>>(this.apiUsuario)
  }

  deletarUsuario(id: number) {
    return this.http.delete<IUsuario>(`${this.apiUsuario}/${id}`)
  }

  editarUsuario(usuario: IUsuario) {
    return this.http.put<IUsuario>(`${this.apiUsuario}/${usuario.id}`, usuario)
  }


}
