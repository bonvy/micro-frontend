import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css',
})
export class LoginButtonComponent {


  constructor(private router: Router) {
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

}
