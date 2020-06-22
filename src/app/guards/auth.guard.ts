import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, // informações da rota
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('AuthGuard');

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    // se não estah logado redireciona para login
    this.router.navigate(['/login']);

    return false;
  }

}
