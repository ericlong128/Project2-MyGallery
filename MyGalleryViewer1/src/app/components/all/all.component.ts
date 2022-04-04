import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from 'src/app/models/client-message';
import { Component, OnInit } from '@angular/core';
import { User,Artwork } from 'src/app/models/user';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = 'All Users';
  public users: User[] = [];
  public clientMessage: ClientMessage = new ClientMessage('Sorry, no users currently in database!');
  public otherUser: User = new User(0, '', '', '', '', '', []);
  artworks?: Artwork[];

  constructor(private userService: UserService, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.findAllUsers();
  }

  findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => {
        this.users = data;
      })
  }
  public onClick(id:number) {
    this.appComponent.id2 = id
    console.log(this.appComponent.id2)
    this.otherUser.id = this.appComponent.id2 
    this.appComponent.updateOtherUserData(this.otherUser)
}
}
