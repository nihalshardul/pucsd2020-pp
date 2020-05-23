import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';
import { IsrootService } from "../../isroot.service";
import { Userpermission } from '../../models/userpermission';
import { User } from '../../models/user';
import { Usergroup } from '../../models/usergroup';

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit {

  message: boolean;
  u_id: any;
  file: boolean;
  val: any;
  per: any;
  fp: number;
  user_root: boolean;

  constructor(private id: IsrootService, private _api: ApiService, private value: UserloginService, private router: Router) { }

  ngOnInit(): void {
    this.value.sharedMessage.subscribe(message => this.message = message)
    if (this.message == false) {
      this.router.navigate(["login"])
    }
    this.id.sharedMessage.subscribe(user_root => this.user_root = user_root)

  }
  rvalue: number;
  resr: any;
  rs: any;
  rname: any;
  resources: Boolean = false;
  rtype: any;
  item: any;
  arr: Array<Userpermission> = [];
  show: Array<User> = [];
  usr_grp: Array<Usergroup> = [];
  content: Boolean = false;
  gn: any;
  shw_usr_grp: Array<User> = [];

  getmy() {
    this.content = true
    this.u_id = this.id.getValue()
    this.resources = true;
    this._api.getUserpermission().subscribe(res => {
      this.resr = res["data"];
      // console.log("Response", res);

      for (let index = 0; index < (this.resr).length; index++) {
        let userObj = new Userpermission();     // for storing objects
        userObj.resource_id = this.resr[index][0]
        userObj.id = this.resr[index][1]
        userObj.permission_id = this.resr[index][2]
        // console.log(userObj)
        if (userObj.id == this.u_id) {
          this.arr.push(userObj)    // push userpermission to arr
          this._api.getResourcesById(Number(userObj.resource_id)).subscribe(rp => {
            this.rs = rp["data"]
            let data_show = new User();
            data_show.first_name = this.rs["resource_name"]
            data_show.id = this.rs["resource_type_id"]

            if (userObj.permission_id == 100) {
              data_show.email = "read"
            } else if (userObj.permission_id == 110) {
              data_show.email = "write"
            } else {
              data_show.email = "read  write  execute"
            }

            this.show.push(data_show)
          });
        }
      }

      console.log("Arr => ", this.show)

    });
  }

  mygrp() {
    this.content = false
    this.u_id = this.id.getValue()

    this._api.getUserGroup().subscribe(res => {
      this.resr = res["data"];
      console.log("Response", res);

      for (let index = 0; index < (this.resr).length; index++) {
        let userObj = new Usergroup();     // for storing objects
        userObj.id = this.resr[index][0]
        userObj.user_id = this.resr[index][1]
        // console.log(userObj)
        if (userObj.user_id == this.u_id) {
          this._api.getGroupById(userObj.id).subscribe(rp => {
            this.rs = rp["data"]
            this.gn = this.rs["group_name"]
            console.log(rp)
            let data_show = new User();

            data_show.id = userObj.id
            data_show.first_name = this.gn

            this.shw_usr_grp.push(data_show)
            
          });
          // this.usr_grp.push(userObj)    // push userpermission to arr
        }
      }
    });
    console.log(this.shw_usr_grp)
  }
}
