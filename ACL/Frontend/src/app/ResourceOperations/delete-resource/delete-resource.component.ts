import { ApiService } from "../../api.service";
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IsrootService } from "../../isroot.service";

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.css']
})
export class DeleteResourceComponent implements OnInit {

  message: boolean;
  user_root:boolean;

  constructor(private _id: IsrootService, private _api: ApiService, private value: UserloginService, private router: Router) { }

  ngOnInit(): void {
    this.value.sharedMessage.subscribe(message => this.message = message)
    if (this.message == false) {
      this.router.navigate(["login"])
    }
    this._id.sharedMessage.subscribe(user_root => this.user_root = user_root)
  }
  u_id: any;
  getid: any;
  id(event: any) {
    this.getid = event.target.value;
  }

  delete() {
    this.u_id = this._id.getValue()
    this._api.deleteResources(this.getid).subscribe(result => {
      console.log("Response", result);

      this._api.updateUserpermission(this.getid).subscribe(result => {
        console.log("Response", result);
        alert("Resource Deleted ....");
      });
    });

    }


}
