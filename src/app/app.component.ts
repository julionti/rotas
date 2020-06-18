import { AuthService } from './login/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'rotas';

  mostrarMenu: boolean = false;

  idCurso: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // aula 41
    this.authService.mostraMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy() {
    // this.authService.mostraMenuEmitter.unsubscribe();
  }
}
