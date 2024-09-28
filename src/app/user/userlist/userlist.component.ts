import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.interface';
import { AppState } from 'src/app/store/app.state';
import { loadUsers } from 'src/app/state/user.action';
import { getUsers } from 'src/app/state/user.selector';
import { UserFacadeService } from 'src/app/services/user-facade.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  usertList!: Observable<User[]>;

  constructor(
    private router: Router,
    private appstateService: UserFacadeService
  ) {}

  ngOnInit(): void {
    //this.usertList = this.store.select(getUsers);
    //this.store.dispatch(loadUsers());

    //USING FACADE DESIGN PATTERN OF NGRX STORE
    this.usertList = this.appstateService.getUserlists();
    this.appstateService.fetchUserList();
  }

  navigateAdduser() {
    this.router.navigate(['/adduser']);
  }

  selectedUser(user: any) {
    this.router.navigate(['/edituser/', user]);
  }
}
