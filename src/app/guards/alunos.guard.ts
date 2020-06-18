import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(route);
    console.log(state);

    if (state.url.includes('editar')) { // negando permissão de edicao
      alert('Usuário sem acesso!');
      // return false;
      return Observable.create(false); // Posso fazer chamada remota a um serviço para verificar permissao

    }

    return true;

  }

}
