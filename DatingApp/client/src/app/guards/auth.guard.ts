import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../services/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private toaster: ToastrService
  ) { }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this.toaster.error("You Shall Not Pass!");
        return false;
      })
    )
  }

}
