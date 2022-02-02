import { Member } from './../../models/member';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MemberCardComponent implements OnInit {
  @Input() member!: Member;

  constructor() { }
  ngOnInit(): void {
  }

}
