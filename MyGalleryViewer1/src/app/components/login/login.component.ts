import { AppComponent } from './../../app.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  loginErrMsg: string = '';
  isLoading: boolean = false; //look into angular material for loading animations

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

  // call on a service to take in the username and password and send it to the endpoint on server
  login() {

    if (!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed to Login';
      return;
    }
    //call authservice to hit login endpoint
    this.isLoading = true;
    this.loginErrMsg = ''; //reset the error message
    this.authService.login(this.username, this.password)
      .subscribe(
        (data) => {
          this.isLoading = false;

          //build a token that we capture from responses header, which has been sent back from Spring
          const token = data.headers.get('portal-token');

          // running snapshot of who's logged in
          sessionStorage.setItem('token', token);

          //set isLoggedIn to true
          this.appComponent.isLoggedIn = true;
          //updateUser data
          this.appComponent.updateUserData(data.body.username);


        },
        () => {
          this.isLoading = false;
          this.loginErrMsg = 'failed to login';
        }
      );

      this.username = '';
      this.password = '';
  }

}
