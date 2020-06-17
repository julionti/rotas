import { routing } from './app.routing';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rotas';

  idCurso: string;

  constructor(private router: Router) {

  }
  navegarCursos(id: string) {
    // console.log(id);
    this.router.navigate(['curso', id]);
  }
}