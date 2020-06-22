import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    // se não estah logado redireciona para login
    this.router.navigate(['/login']);
  }

  canActivate(
    route: ActivatedRouteSnapshot, // informações da rota
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.verificarAcesso();
  }

  canLoad(route: Route, segments: import('@angular/router').UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    // Verifica se o usr tá autenticado
    console.log('canLoad:  Verificando se o usr pode carregar o código do modulo');

    return this.verificarAcesso();
  }


}
