import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { NosotrosService } from './nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {
  lista_publicaciones = [];
  cargando: boolean = false;

  constructor(private nosotrosService: NosotrosService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.nosotrosService.listar().subscribe(
      (res: any) => {
        console.log(res);
        this.lista_publicaciones = res;
        this.cargando = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
