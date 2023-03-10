import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private readonly authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
