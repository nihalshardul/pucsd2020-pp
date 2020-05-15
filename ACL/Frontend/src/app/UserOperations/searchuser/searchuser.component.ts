import { Component, OnInit } from '@angular/core';
import {  ApiService } from "../../api.service";
import { UserloginService } from "../../userlogin.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  message:boolean;

  constructor(private _api : ApiService, private value: UserloginService, private router: Router) { }

  ngOnInit(): void {
    this.value.sharedMessage.subscribe(message => this.message = message)
    if (this.message == false){
      this.router.navigate(["login"])
    }
  }
  byid=false;
  users : any;
  item : any [];


  getall(){           // for endpoint 
    this._api.getUsers().subscribe(res => {
    this.users = res["data"]; 
    console.log("Response", res);
    console.log(this.users)
    });
  }

  // ngOnInit(){
  //   this._api.getUsers().subscribe((data: any[])=>{
  //     console.log(data);
  //     this.users = data;
  //   // this._api.getUsers().subscribe(data => this.users = data);


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
    // this.users = data;
    // console.log(this.getid);
    // })
  getbyid(){
    this.byid = true;
    console.log(this.getid);
    this._api.getUserById(this.getid).subscribe( res => {
      this.item = res["data"] 
      console.log("Response", res);
      console.log("Items ",this.item);
      // console.log(this.users)

      
    });
  }

}
