import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService:UsersService , private rout: Router) { }
  user: User;
  password: string = "";
  name: string = "";
  f: boolean = false;
  ngOnInit() {
  }
  click() {
    //if the user exsist on the serever the user transferred to the home page
    this.userService.getUserByPswrd(this.name, this.password).subscribe(
      data => {
      this.user = data;
        this.userService.currentUser=data;
        this.user.userName ? this.rout.navigate(["/AdvancedStudy"]) : alert("משתמש לא קיים במערכת");
      },
      error => { alert(error.message); }
    )

  }


}
