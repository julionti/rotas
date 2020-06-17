import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// import { MatTabsModule } from '@angular/material/tabs';
// import { MatListModule } from '@angular/material/list';

import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutingModule } from './cursos.routing.module';
// import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    // MatTabsModule,
    // MatListModule
    // RouterModule // ficar disponivel abaixo
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent],
  providers: [CursosService]
})
export class CursosModule {

}

