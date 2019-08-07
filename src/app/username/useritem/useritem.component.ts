import { Component, OnInit,Input  } from '@angular/core';
import{ Username } from '../username.module';
import { usernameService } from '../username.service';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {
  @Input() username:usernameService;
  @Input() index:number;


  ngOnInit() {
  }

}
