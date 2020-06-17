import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;

  inscricao: Subscription;

  curso;

  constructor(private route: ActivatedRoute,
              private cursosService: CursosService,
              private router: Router) {
    // console.log(this.route);
    //  this.id = this.route.snapshot.params['id']; só obtem na criação
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;

        this.curso = this.cursosService.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['cursos/naoEncontrado']);
        }
      }
    );
  }

  OnDestroy() {
    // console.log('this.route');
    this.inscricao.unsubscribe();
  }

}
