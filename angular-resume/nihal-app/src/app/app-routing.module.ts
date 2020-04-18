import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechKnowComponent } from './tech-know/tech-know.component';
import { WrkExpComponent } from './wrk-exp/wrk-exp.component';
import { EduComponent } from './edu/edu.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'technical_knowledge' , component: TechKnowComponent},
  {path: 'work_exp' , component: WrkExpComponent},
  {path: 'education' , component: EduComponent},
  {path: 'project' , component: ProjectComponent},
  {path: 'about' , component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
