import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CreateuserComponent } from './UserOperations/createuser/createuser.component';
import { UpdateuserComponent } from './UserOperations/updateuser/updateuser.component';
import { DeleteuserComponent } from './UserOperations/deleteuser/deleteuser.component';
import { SearchuserComponent } from './UserOperations/searchuser/searchuser.component';
import { SearchgroupComponent } from './GroupOperations/searchgroup/searchgroup.component';
import { DeletegroupComponent } from './GroupOperations/deletegroup/deletegroup.component';
import { UpdategroupComponent } from './GroupOperations/updategroup/updategroup.component';
import { CreategroupComponent } from './GroupOperations/creategroup/creategroup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    SearchuserComponent,
    SearchgroupComponent,
    DeletegroupComponent,
    UpdategroupComponent,
    CreategroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
