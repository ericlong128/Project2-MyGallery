import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {

  title='Remove User by Id';
  public userId: number = 0;
  public user: User = new User(0,'','','','','',[]);
  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  public removeUser() {

    this.userService.deleteUserById(this.userId)
      .subscribe(
        () => this.clientMessage.message = `Removed user with the ID: ${this.userId}`,
        () => this.clientMessage.message = `Unable to remove user with ID: ${this.userId}`
      )
  }



}
