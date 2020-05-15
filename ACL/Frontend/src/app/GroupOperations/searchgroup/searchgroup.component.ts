import { Component, OnInit } from '@angular/core';
import {  ApiService } from "../../api.service";
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchgroup',
  templateUrl: './searchgroup.component.html',
  styleUrls: ['./searchgroup.component.css']
})
export class SearchgroupComponent implements OnInit {

  message:boolean;

  constructor(private _api : ApiService, private value: UserloginService, private router: Router) { }

  ngOnInit(): void {
    this.value.sharedMessage.subscribe(message => this.message = message)
    if (this.message == false){
      this.router.navigate(["login"])
    }
  }
  byid=false;
  groups : any;
  item : any [];


  getall(){           // for endpoint 
    this._api.getGroup().subscribe(res => {
    this.groups = res["data"]; 
    console.log("Response", res);
    console.log(this.groups)
    });
  }

  // ngOnInit(){
  //   this._api.getUsers().subscribe((data: any[])=>{
  //     console.log(data);
  //     this.groups = data;
  //   // this._api.getUsers().subscribe(data => this.groups = data);


  //   });
  // }
  getid: any;
  id(event:any){
    this.getid = event.target.value;
  }

  // getbyid(event: any){
    // this.byid = false;
    // const _id = event.target.value;
    // this._api.getUserById(_id).subscribe((data: any[])=>{
    // console.log(data);
    // this.groups = data;
    // console.log(this.getid);
    // })
  getbyid(){
    this.byid = true;
    console.log(this.getid);
    this._api.getGroupById(this.getid).subscribe( res => {
      this.item = res["data"] 
      console.log("Response", res);
      console.log("Items ",this.item);
      // console.log(this.groups)

      
    });
  }

}
