import { AuthGuard } from './guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',                          // localhost:4200
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(m => m.MembersModule)
      },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent }
    ]
  },
  {
    path: '**',                       // localhost:4200/non-existing-route/fdghf/fgjaaert
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    // localhost:4200/[route]
  exports: [RouterModule]
})
export class AppRoutingModule { }
