import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { User } from '../models/user';
import { MembersService } from '../services/members.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  user: User;

  constructor(
    private accountService: AccountService,
    private membersService: MembersService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user as User);
  }

  ngOnInit(): void {
    this.loadMember();
  }


  loadMember(){
    this.membersService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    });
  }

}
