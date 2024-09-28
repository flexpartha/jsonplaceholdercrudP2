import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { User } from '../../model/user.interface';
import { addUser } from '../../state/user.action';
import { Router } from '@angular/router';
import { UserFacadeService } from 'src/app/services/user-facade.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private appState: UserFacadeService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.fb.group({
          lat: [''],
          lng: [''],
        }),
      }),
      phone: [''],
      website: [''],
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: [''],
      }),
    });
  }
  addUser() {
    console.log('Submitted value', this.userForm.value);
    const user: User = {
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      address: this.userForm.value.address,
      phone: this.userForm.value.phone,
      website: this.userForm.value.website,
      company: this.userForm.value.company,
    };
    console.log('User:::---', user);
    //this.store.dispatch(addUser({user}));

    //USING FACADE DESIGN PATTERN OF NGRX STORE
    this.appState.addUser(user);
    this.router.navigate(['/userList']);
  }
}
