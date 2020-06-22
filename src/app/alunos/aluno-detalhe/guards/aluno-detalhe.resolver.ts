import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, RouterModule } from '@angular/router';

import { Aluno } from '../../aluno';
import { AlunosService } from './../../alunos.service';

// carrega o aluno do servico fora e antes do componente aluno-detalhe
@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    console.log('AlunoDetalheResolver');

    let id = route.params.id;

    return this.alunosService.getAluno(id);
  }
}
