import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
// import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// import { CursosModule } from './cursos/cursos.module';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })], // usar # nos links
  exports: [RouterModule]
})

export class AppRoutingModule {
}
