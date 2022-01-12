import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',                          // localhost:4200
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'members',                  // localhost:4200/members
  component: MemberListComponent
},
{
  path: 'members/:id',              // localhost:4200/members/id
  component: MemberDetailComponent
},
{
  path: 'lists',                    // localhost:4200/lists
  component: ListsComponent
},
{
  path: 'messages',                 // localhost:4200/messages
  component: MessagesComponent
},
{
  path: '**',                       // localhost:4200/non-existing-route/fdghf/fgjaaert
  pathMatch: 'full',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
