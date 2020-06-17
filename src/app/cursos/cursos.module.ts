import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';


const ROUTES: Routes = [
  { path: '', component: CursosComponent}
];
@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    RouterModule.forChild(ROUTES)
    // FormsModule
    // RouterModule // ficar disponivel abaixo
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: []
})

export class CursosModule {
}

