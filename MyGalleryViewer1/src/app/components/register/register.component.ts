import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { Artwork, User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';
  public user = new User(0,'','','','','',[]);


  // public artwork = new Artwork(0,0,'','','','','','','',0,0);

  clientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  public registerUser(): void {

    console.log(this.user);


    //call upon a service to transmit object via HTTP to a backend API
    // this.user.artworks.push(this.artwork);

    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully Registered ${data.username} `,
        error => this.clientMessage.message = `Something went wrong. Error ${error}`);
  }
}
