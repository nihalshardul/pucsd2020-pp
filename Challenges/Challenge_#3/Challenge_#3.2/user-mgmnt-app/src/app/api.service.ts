import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = 'webapi/v1/';
  // private apiURL: string = "/assets/data.json";

  constructor(private httpClient: HttpClient) {}

  public createUser(user: User){
    // return this.httpClient.post(`${this.apiURL}/user/`,user);
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
    // return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  // public getUsers():Observable<User[]>{
  public getUsers(){
  
    // return this.httpClient.get(this.apiURL);     //endpoint
    // return this.httpClient.get<User[]>(this.apiURL)
    return this.httpClient.get(`${this.apiURL}user`); 
  }

}
