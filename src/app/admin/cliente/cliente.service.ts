import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  urlBase = environment.servidor;

  headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    try {
      let token = JSON.parse(atob(localStorage.getItem('token')));

      this.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: 'Bearer ' + token.access_token,
      });
    } catch (error) {
      console.log(error);
      this.router.navigate(['ingresar']);
    }
  }

  listar() {
    return this.http.get(`${this.urlBase}/cliente`, { headers: this.headers });
  }

  guardar(cliente) {
    return this.http.post(`${this.urlBase}/cliente`, cliente, {
      headers: this.headers,
    });
  }

  modificar(id, cliente) {
    return this.http.put(`${this.urlBase}/cliente/${id}`, cliente, {
      headers: this.headers,
    });
  }

  mostrar(id) {
    return this.http.get(`${this.urlBase}/cliente/${id}`, {
      headers: this.headers,
    });
  }

  eliminar(id) {
    return this.http.delete(`${this.urlBase}/cliente/${id}`, {
      headers: this.headers,
    });
  }

  realizarPedido(data) {
    return this.http.post(`${this.urlBase}/pedido`, data, {
      headers: this.headers,
    });
  }
}
