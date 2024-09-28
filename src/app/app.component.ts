import { Component, OnInit } from '@angular/core';
import { IdleUserService } from './services/idle-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jsonplaceholdercrudP2';
  isUserIdle: boolean = false;

  constructor(private idleUserService: IdleUserService){}

  ngOnInit(): void {
    this.idleUserService.userInactive.subscribe((isIdle) => {
      console.log(isIdle)
      this.isUserIdle = isIdle
    });
  }

  reset() {
    console.log('Reset idle timer');
    this.isUserIdle = false;
    this.idleUserService.reset();
  }
}
