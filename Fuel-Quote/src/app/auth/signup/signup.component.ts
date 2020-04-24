import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  isLoading = false;
  public showMyMessage = false;
  constructor(public authService: AuthService)
  {

  }

  showMyMessageSoon()
  {
    setTimeout(() => {
      this.showMyMessage = true
    }, 3000)
  }

  onSignup(form: NgForm) {
    if (form.invalid)
    {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
  }
}
