import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private userService:UserService,private router:Router){
    this.user= new User();
  }

  ngOnInit() {
  }
  
  loginaction():void{
    this.userService.login(this.user).subscribe((result)=>{
      if(result.getuserName() == "login_failed"){
        console.log('login failed');
      }else{
        console.log('login successful : ' + result.getuserName());
        this.router.navigate(['update']);
      }
    });
  }
}
