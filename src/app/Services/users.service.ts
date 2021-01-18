import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //public list:Array<Member>;
  constructor(private httpser: HttpClient) {
    //get all the areas from the server
    this.allUsers = new Array();
    this.getAllUsers().subscribe(
      data => {
        this.allUsers = data;
      },
      error => { alert(error.message); }
    );
  }
  allUsers: Array<User>;
  currentUser: User;
  baseUrl = "https://localhost:44394/api/Users/";
  getAllUsers(): Observable<Array<User>> {
    return this.httpser.get<Array<User>>(this.baseUrl + "GetAll");
  }
  getUserByPswrd(userName: string, pass: string): Observable<User> {
    return this.httpser.get<User>(this.baseUrl + "GetUsr/name=" + userName +'&password='+ pass);
  }
  /*addMember(m: Member): Observable<Array<Member>> {
    return this.httpser.post<Array<Member>>(this.baseUrl + "AddMember", m);
  }
  addTime(t: FreeTime): Observable<FreeTime> {
    return this.httpser.post<FreeTime>(this.baseUrl + "AddTime", t);
  }
  editMember(m: Member): Observable<Array<Member>> {
    return this.httpser.put<Array<Member>>(this.baseUrl + "EditMember", m)
  }
  deleteMember(id: number): Observable<Array<Member>> {
    return this.httpser.delete<Array<Member>>(this.baseUrl + "DeleteMember/" + id);
  }*/
            
}
