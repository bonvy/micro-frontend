import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, MatLabel, MatFormFieldModule, MatInput, MatError, ReactiveFormsModule, MatButton, MatIcon],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {

  form = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required]),
    passwordFormControl: new FormControl('', [Validators.required]),
  })
}
