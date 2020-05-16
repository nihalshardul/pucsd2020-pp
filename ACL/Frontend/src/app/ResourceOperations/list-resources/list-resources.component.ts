import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';
import { IsrootService } from "../../isroot.service";

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit {

  message: boolean;
  u_id : any;
  file: boolean;
  val: any;
  per: any;
  fp:number;
  user_root:boolean;

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
  rname : any;
  resources: Boolean = false;
  rtype : any;
  item: any;

  getmy(){
    this.u_id = this.id.getValue() 
    this.resources=true;
    this._api.getUserpermissionById(this.u_id).subscribe(res => {
      this.resr = res["data"];
      // console.log("Response", res);
      console.log(this.resr)
      this.val = this.resr["permission_id"]
      if(this.val == 100){
        this.per = "read"
      }else if(this.val == 110 ){
        this.per = "write"
      }else{
        this.per = "read  write  execute"
      }
      this.fp = this.resr["resource_id"]
      this.rvalue = Number(this.fp)
         
    
    this._api.getResourcesById(this.rvalue).subscribe(rp => {
      this.item = res["message"]
      if (this.item == undefined) {
        
        this.rs = rp["data"];
        console.log("Response", rp);
        console.log(this.rs)
        this.rname = this.rs["resource_name"]
        this.rtype = this.rs["resource_type_id"]
        // console.log("value",typeof(this.rvalue))
        if(this.rtype == 1){
          this.file = true
        }else{
          this.file = false
        }
      }else{
        alert("No Resources made by you...");
      }
    });
  });
  }


}
