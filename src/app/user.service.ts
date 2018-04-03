import { Injectable } from '@angular/core';
import {User} from './user'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

login(user:User):Observable<User>{
  return this.http.post<User>('http://localhost:8080/getUser',JSON.stringify(user),{headers:{
    'Content-Type': 'application/json'
  }});
}

adduser(user:User):Observable<User>{
  return this.http.post<User>('http://localhost:8080/addUser',JSON.stringify(user),{headers:{
    'Content-Type': 'application/json'
  }});
}

updateuser(user:User):Observable<User>{
  return this.http.post<User>('http://localhost:8080/updateUser',JSON.stringify(user),{headers:{
    'Content-Type': 'application/json'
  }});
}

}
