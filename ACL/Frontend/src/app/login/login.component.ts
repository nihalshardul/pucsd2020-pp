import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { UserloginService } from '../userlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private value: UserloginService ) { }
  message : boolean;


  ngOnInit(): void {
    this.value.sharedMessage.subscribe(islogin => this.message = this.message)

  }
  root_user: Number;
  email: String;
  password : String;
  onlogin : number = 0;
  
  // @Output() islogin = new EventEmitter();

  validation = function(data){
    this.email = data.email,
    this.password = data.password

    if (this.email == 'admin' && this.password == 'admin'){
      this.root_user = 1
      // this.islogin.emit(this.islogin)
      this.value.nextMessage(true)
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
