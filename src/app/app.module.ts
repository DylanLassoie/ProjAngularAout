import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {RouterOutlet} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DisciplineComponent } from './components/discipline/discipline.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NewDisciplineComponent } from './components/newDiscipline/newDiscipline.component';
import { NewProjectComponent } from './components/newProject/newProject.component';
import { ModifyDisciplineComponent } from './components/modifyDiscipline/modifyDiscipline.component';
import { ModifyProjectComponent } from './components/modifyProject/modifyProject.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ProjectComponent,
    DisciplineComponent,
    NewDisciplineComponent,
    NewProjectComponent,
    ModifyDisciplineComponent,
    ModifyProjectComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
