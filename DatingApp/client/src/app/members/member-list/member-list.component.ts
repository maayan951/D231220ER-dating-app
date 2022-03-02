import { Pagination } from './../../models/Pagination';
import { Observable } from 'rxjs';
import { MembersService } from './../../services/members.service';
import { Member } from 'src/app/models/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  pagination: Pagination;
  pageNumber: number = 1;
  pageSize: number = 5;


  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers(this.pageNumber, this.pageSize).subscribe(
      res => {
        this.members = res.result;
        this.pagination = res.pagination;
      }
    )
  }

  pageChanged({page}: any) {
    this.pageNumber = page;
    this.loadMembers();
  }


}
