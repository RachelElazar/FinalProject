import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//מודולים אלו מטפלים בניווט
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AdvancedStudyComponent } from '../Components/advanced-study/advanced-study.component';
import { WaitingsListComponent } from '../Components/waitings-list/waitings-list.component';
import { StudentsListComponent } from '../Components/students-list/students-list.component';

const appRoutes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "AdvancedStudy", component: AdvancedStudyComponent },
  /* children: 
   [
     {path:"", component:LoginComponent},
     {path:"register", component:RegisterComponent}
   ] },*/
  { path: "WaitingsList", component: WaitingsListComponent },
  { path: "StudentsList", component: StudentsListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class RoutingModule { }
