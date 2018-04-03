import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;

  constructor(private userService:UserService){
    this.user= new User();
  }

  ngOnInit() {
  }

  adduser():void{
    this.userService.adduser(this.user).subscribe(()=>{
      console.log("added successfully");
    });
  }

}
