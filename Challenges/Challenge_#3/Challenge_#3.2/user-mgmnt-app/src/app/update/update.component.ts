import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor( private _api : ApiService) { }

  updateuser: Object  = {} ;
  isUpdated: Boolean = false;
  Confirmation: String = "User details has been Updated.";

  ngOnInit(): void {
  }
  
  put = function(data){
    this.updateuser = {
      "id":data.id,
      "first_name":data.first_name,
      "last_name":data.last_name,
      "email":data.email,
      "password":data.password,
      "contact_number":data.contact_number
    }

    this._api.updateUser(this.updateuser).subscribe(res => {
       console.log(res);
       this.isUpdated=true;
       
    })
  }


}
