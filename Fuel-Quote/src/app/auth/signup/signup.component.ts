import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  isLoading = false;

  constructor(public authService: AuthService)
  {

  }

  completed()
  {
    alert("Registration Completed");

  }

  onSignup(form: NgForm) {
    if (form.invalid)
    {
      return;
    }
    this.completed();
    this.authService.createUser(form.value.email, form.value.password);
  }
}
