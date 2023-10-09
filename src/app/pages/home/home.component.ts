import { Component, OnInit } from '@angular/core';
import { User } from 'src/types/User';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails: User = {} as User;
  hasError: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getUserDetails('thiagokachi');
  }

  constructor(private userService: UserService) {}

  getUserDetails(userName: string) {
    this.isLoading = true;
    this.hasError = false;

    this.userService.getUserDetails(userName).subscribe({
      next: (user: User) => {
        this.userDetails = user;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.hasError = true;
      }
    });
  }
}
