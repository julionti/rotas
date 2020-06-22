import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheResolver } from './aluno-detalhe/guards/aluno-detalhe.resolver';

// import { AlunosDeactivateGuard } from './alunos-deactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunoDetalheResolver
  ]
})
export class AlunosModule {

}
