import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _api : ApiService) { }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "New User has been Registered.";
 
  ngOnInit(): void {
  }


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
