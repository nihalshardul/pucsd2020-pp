import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  root_user: Number;
  email: String;
  password : String;



  validation = function(data){
    this.email = data.email,
    this.password = data.password

    if (this.email == 'admin' && this.password == 'admin'){
      this.root_user = 1
      this.router.navigate(["home"])
    }else{
      alert("Invalid Credentials...")
    }

  }    

    // this._api.loginUser(this.email , this.password).subscribe(res => {
    //    console.log(res);       
    // })

    // login() : void {
    //   if(this.email == 'admin' && this.password == 'admin'){
    //    this.router.navigate(["user"]);
    //   }else {
    //   alert("Invalid credentials");
    //   }
    // }
}
