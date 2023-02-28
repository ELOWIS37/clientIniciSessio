import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private readonly authService: AuthService) {

  }

  onSubmit(): void {
    this.authService.register(this.email, this.password).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
