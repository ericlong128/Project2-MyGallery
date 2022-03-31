

import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { Gallery, User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';
  public user = new User(0,'','','','','',[]);
  public gallery = new Gallery('','','');
  clientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  public registerUser(): void {

    console.log(this.user);

    //call upon a service to transmit object via HTTP to a backend API
    this.user.gallery.push(this.gallery);

    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully Registered ${data.firstName} `,
        error => this.clientMessage.message = `Something went wrong. Error ${error}`);
  }
}
