import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButton } from '@angular/material/button';
import { LoginPageComponent } from '../pages/login-page/login-page.component';


@Component({
  imports: [ RouterModule, MatButton, LoginPageComponent],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'login';
}
