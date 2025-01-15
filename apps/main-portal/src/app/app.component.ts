import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [ RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'main-portal';
}
