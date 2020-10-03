import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ingresar() {
    this.loginService.login(this.loginForm.value).subscribe(
      (datos: any) => {
        console.log(datos);
        if (!datos.access_token) {
          this.toastr.error('Error al iniciar sesion', datos.mensaje);
        } else {
          console.log(datos);
          localStorage.setItem('token', btoa(JSON.stringify(datos)));
          this.toastr.success('Sesion iniciada', 'Mensaje');
          this.router.navigate(['admin']);
        }
      },
      (error: any) => {
        console.log(error);
        this.toastr.error('Error al iniciar sesion');
      }
    );
  }
}
