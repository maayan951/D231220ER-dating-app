import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { Pagination } from '../models/Pagination';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  pagination: Pagination;
  container: string = 'Unread';
  pageNumber: number = 1;
  pageSize: number = 5;
  loading: boolean = false;
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.leadMessages();
  }

  leadMessages() {
    this.loading = true;
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(x => {
      this.messages = x.result;
      this.pagination = x.pagination;
      this.loading = false;
    });
  }

  pageChanged(event: any):void {
    // if(this.pageNumber  !== event.page) {
      this.pageNumber = event.page;
      this.leadMessages();
    // }
  }

}
