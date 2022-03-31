import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from 'src/app/models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = 'All Users';
  public users: User[] = [];
  public clientMessage: ClientMessage = new ClientMessage('Sorry, no users currently in database!');

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.findAllUsers();
  }

  findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => {
        this.users = data;
      })
  }

}
