import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    try {
      let token = JSON.parse(atob(localStorage.getItem('token')));
      if (token && token.access_token) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      //Token incorrecto
      localStorage.clear();
      this.router.navigate(['ingresar']);
    }
    return true;
  }
}
