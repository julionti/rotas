import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from './alunos-deactivate.guard';
import { AlunoDetalheResolver } from './aluno-detalhe/guards/aluno-detalhe.resolver';

const alunosRoutes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [ // para funcionar <router-outlet></router-outlet> no html
      { path: 'novo', component: AlunoFormComponent },
      {
        path: ':id', component: AlunoDetalheComponent,
        resolve: { alunoObtido: AlunoDetalheResolver }
      },
      {
        path: ':id/editar', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {

}
