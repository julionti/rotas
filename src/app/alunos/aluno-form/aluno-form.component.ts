import { IFormCanDeactivateGuard } from './../../guards/iform-candeactivate.guard';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivateGuard {

  aluno: any;
  inscricao: Subscription;
  private formMudou = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.alunosService === null) {
          this.aluno = {};
        }
      }
    );
  }

  onInput() {
    console.log('mudou');
    this.formMudou = true;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  podeMudarRota() {

    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
