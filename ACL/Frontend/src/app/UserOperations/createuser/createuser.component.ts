import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private _api : ApiService) { }

  ngOnInit(): void {
  }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "New User has been Registered.";


  post = function(data){
    this.newuser = {
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this._api.createUser(this.newuser).subscribe(res => {
       console.log(res);
       this.isAdded=true;
       
    })
  }



}
