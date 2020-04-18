import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TeckKnowComponent } from './teck-know/teck-know.component';
import { TechKnowComponent } from './tech-know/tech-know.component';
import { WrkExpComponent } from './wrk-exp/wrk-exp.component';
import { EduComponent } from './edu/edu.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // TeckKnowComponent,
    TechKnowComponent,
    WrkExpComponent,
    EduComponent,
    ProjectComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
