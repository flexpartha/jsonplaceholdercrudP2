import { Injectable } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { addUser, loadUsers, updateUsers } from '../state/user.action';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { getUsers } from '../state/user.selector';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(private store: Store<AppState>) {}

  fetchUserList() {
    this.store.dispatch(loadUsers());
  }

  getUserlists(): Observable<User[]> {
    return this.store.select(getUsers);
  }

  addUser(user: User) {
    this.store.dispatch(addUser({ user }));
  }

  updateUsers(user: User) {
    this.store.dispatch(updateUsers({ user }));
  }
}
