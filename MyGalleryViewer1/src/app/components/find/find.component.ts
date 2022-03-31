import { ClientMessage } from 'src/app/models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title='Find User By ID';

  userId: number = 0;
  public user: User = new User(0,'','','','','',[]);
  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  public findUser() {

    this.userService.findUserById(this.userId)
      .subscribe(
        data => {
          this.user = data;
          this.clientMessage.message = '';
        },
        error => this.clientMessage.message = `Can't find the user with the id: ${this.userId}`
      )
  }


}
