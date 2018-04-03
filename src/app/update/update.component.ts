import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user:User;
  
  constructor(private userService:UserService){
    this.user= new User();
  }

  ngOnInit() {
  }

  updateuser():void{
    this.userService.updateuser(this.user).subscribe(()=>{
      console.log("updated successfully");
    });
  }

}
