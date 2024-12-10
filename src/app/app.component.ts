import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav>
        <a routerLink="/">Inicio</a>
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Registro</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
