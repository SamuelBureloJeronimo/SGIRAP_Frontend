import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      alert('Inicio de sesión exitoso'); 
    } else {
      alert('Por favor, ingrese usuario y contraseña');
}

  }
}
