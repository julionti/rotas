import { IFormCanDeactivateGuard } from './../guards/iform-candeactivate.guard';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivateGuard> {

  canDeactivate(
    component: IFormCanDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
    // ,nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('guarda de desativação');

    // return component.podeMudarRota();

    return component.podeDesativar();

  }

}
