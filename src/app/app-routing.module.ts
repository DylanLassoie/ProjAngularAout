import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from "./components/project/project.component";
import {DisciplineComponent} from "./components/discipline/discipline.component";
import {HomeComponent} from "./components/home/home.component";
import {NewDisciplineComponent} from "./components/newDiscipline/newDiscipline.component";
import {NewProjectComponent} from "./components/newProject/newProject.component";
import {ModifyDisciplineComponent} from "./components/modifyDiscipline/modifyDiscipline.component";
import {ModifyProjectComponent} from "./components/modifyProject/modifyProject.component";


const routes: Routes = [
  {path: 'project', component: ProjectComponent},
  {path: 'discipline', component: DisciplineComponent},
  {path:"newDiscipline",component:NewDisciplineComponent},
  {path:"newProject",component:NewProjectComponent},
  {path:"modifyDiscipline",component:ModifyDisciplineComponent},
  {path:"modifyProject",component:ModifyProjectComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
