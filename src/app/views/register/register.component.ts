// src/app/register/register.component.ts
import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterModule, CommonModule],
  standalone: true,
  providers: [AuthService]
})
 export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        window.location.href =  '/table';
      },
      (error) => {
        if (error.status === 400) {  
          this.errorMessage = 'El usuario ya está registrado. Por favor, inicia sesión.';
        } else {
          this.errorMessage = 'Ocurrió un error durante el registro. Intenta de nuevo.';
        }
      }
    );
  }

 }

