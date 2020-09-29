import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NosotrosService {
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
