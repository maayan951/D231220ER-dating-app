import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout() {
    this.accountService.logout();
  }

  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log('Failed to login', error);
      }, () => {
        console.log('Login complete');
      });
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe((user: User | null) => {
      this.loggedIn = !!user;
    });
  }


}
