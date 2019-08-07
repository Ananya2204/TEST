import { Component, OnInit, Input } from '@angular/core';
import{username} from './username.module';
import{usernameService} from './username.service';
import{UsersGetService} from '../appget.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  providers:[usernameService]
})
export class UsernameComponent implements OnInit {
  @Input() username:username[];
  @Input() index:number;
  

  constructor( private UserService:usernameService) { }

  ngOnInit() {
    this.username=this.userService.getusernames();
    
  }

}
