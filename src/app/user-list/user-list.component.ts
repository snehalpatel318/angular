import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  comments: User[] = [];

  constructor(private commentService: UserService) { }
  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    },
    );
  }

}
