import { AccountService } from './../services/account.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any ={};
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter<boolean>();

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  register(){
    this.accountService.register(this.model).subscribe(
      (data) => {
        console.log(data);
        this.cancel();
      },
      error => {
        this.toastr.error(error.error);
        console.log(error);
      }
    )
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
