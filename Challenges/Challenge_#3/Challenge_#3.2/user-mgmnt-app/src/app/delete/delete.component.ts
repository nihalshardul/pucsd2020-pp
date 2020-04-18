import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _api: ApiService) { }

  getid: any;
  isdel: Boolean = false;
  Confirmation: String = "User Deleted Successfully.";

  id(event:any){
    this.getid = event.target.value;
  }

  ngOnInit(): void {
  }

  delete(){
    this._api.deleteUser(this.getid).subscribe(res => {
      console.log(res);      
      this.isdel=true;
   })
  }

}
