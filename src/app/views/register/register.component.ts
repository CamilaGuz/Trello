// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterModule],
  standalone: true
})
export class RegisterComponent {
  user = {
    email: ''
  };
  formErrors: any = {};

  constructor(private authService: AuthService) {}

  onSubmit() {
  
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Usuario registrado con éxito:', response);
      },
      error => {
        console.error('Error en el registro:', error);
        this.formErrors = error.error.errors || {};
      }
    );
  }
}
