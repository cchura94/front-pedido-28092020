import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
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
    return this.http.get(`${this.urlBase}/producto`, { headers: this.headers });
  }

  guardar(producto) {
    return this.http.post(`${this.urlBase}/producto`, producto, {
      headers: this.headers,
    });
  }

  modificar(id, producto) {
    return this.http.put(`${this.urlBase}/producto/${id}/editar`, producto, {
      headers: this.headers,
    });
  }

  mostrar(id) {
    return this.http.get(`${this.urlBase}/producto/${id}`, {
      headers: this.headers,
    });
  }

  eliminar(id) {
    return this.http.delete(`${this.urlBase}/producto/${id}`, {
      headers: this.headers,
    });
  }
}
