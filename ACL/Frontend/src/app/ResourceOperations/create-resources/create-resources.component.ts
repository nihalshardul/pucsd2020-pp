import { ApiService } from '../../api.service';
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IsrootService } from "../../isroot.service";

@Component({
  selector: 'app-create-resources',
  templateUrl: './create-resources.component.html',
  styleUrls: ['./create-resources.component.css']
})
export class CreateResourcesComponent implements OnInit {

  message: boolean;

  constructor(private id: IsrootService, private _api: ApiService, private value: UserloginService, private router: Router) { }
  resource_name: any;
  resource_path: any;
  per: any;
  name: any;
  path: any;
  res: Object = {};
  usrres: Object = {};
  u_id: any;
  item: any;
  res_id: any;
  user_root: boolean;
  per_id: number;
  def:any;

  ngOnInit(): void {
    this.value.sharedMessage.subscribe(message => this.message = message)
    if (this.message == false) {
      this.router.navigate(["login"])
    }
    this.id.sharedMessage.subscribe(user_root => this.user_root = user_root)

  }

  post = function (data) {

    if (data.value == "file") {
      this.per = 1
    } else {
      this.per = 2
    }
    this.name = data.resource_name
    this.path = data.resource_path
    this.res = {
      "resource_type_id": this.per,
      "resource_name": this.name,
      "resource_path": this.path,
    }
    this.u_id = this.id.getValue()

    this._api.createResources(this.res).subscribe(result => {
      this.item = result["message"]
      if (this.item == undefined) {

        this.resr = result["data"];
        // console.log("Response", res);
        console.log(result)
        this.res_id = Number(this.resr["id"])
        this.per_id = 111
        this.usrres = {
          "resource_id": this.res_id,
          "user_id": this.u_id,
          "permission_id": this.per_id,
        }
        this._api.createUserpermission(this.usrres).subscribe(result => {
          this.def = result["data"];
          console.log(this.def)
          alert("Resource Added...")
        });


      } else {
        alert("Invalid Path...")
      }
    });

  }




}


