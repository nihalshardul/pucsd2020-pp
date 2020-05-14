import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./models/user";
import { Group } from "./models/group";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = 'webapi/v1/';

  constructor(private httpClient: HttpClient) { }

  public createUser(user: User){
    return this.httpClient.post(`${this.apiURL}user`,user);
  
  }

  public updateUser(user: User){
    return this.httpClient.put(`${this.apiURL}user/${user.id}`,user);
  }

  public deleteUser(id: number){
    return this.httpClient.delete(`${this.apiURL}user/${id}`);
  }

  public getUserById(id: number){
    return this.httpClient.get(`${this.apiURL}/user/${id}`);   //endpoint
  }

  public getUsers(){
    return this.httpClient.get(`${this.apiURL}user`); 
  }

  // public loginUser(email: String , password: String){
  //   return this.httpClient.get(`${this.apiURL}/user/${user.email}/${user.password}`);   //for login we need username and password
  // }
  public createGroup(group: Group){
    return this.httpClient.post(`${this.apiURL}group`,group);
  
  }

  public updateGroup(group: Group){
    return this.httpClient.put(`${this.apiURL}group/${group.id}`,group);
  }

  public deleteGroup(id: number){
    return this.httpClient.delete(`${this.apiURL}group/${id}`);
  }

  public getGroupById(id: number){
    return this.httpClient.get(`${this.apiURL}/group/${id}`);   //endpoint
  }

  public getGroup(){
    return this.httpClient.get(`${this.apiURL}group`); 
  }


}
