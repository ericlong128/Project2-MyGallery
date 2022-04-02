import { ClientMessage } from 'src/app/models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';

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
  public otherUser: User = new User(0, '', '', '', '', '', []);

 

  constructor(private userService: UserService,private appComponent: AppComponent) { }

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
  public onClick(id:number) {
    this.appComponent.id2 = id
    console.log(this.appComponent.id2)
    this.otherUser.id = this.appComponent.id2 
    this.appComponent.updateOtherUserData(this.otherUser)
}

}
