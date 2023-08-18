import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs';
import {Projet} from '../../entities/projet.entities';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  projets?: Projet[];
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    this.projectService.searchProjet(value.nom).subscribe(
      {
        next: data => {
          console.log("API Response:", data);
          this.projets = data;
        },
        error: err => {
          console.error("API Error:", err);
        }
      });
  }

  onSearchCoutProjet(value : any) {
    this.projectService.searchCoutProjet(value.cout).subscribe(
      {
        next: data => {this.projets = data}
      });
  }

  onNewProjet() {  this.router.navigateByUrl('newProject'); }

  onDelete(p: Projet) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projectService.deleteProjet(p).subscribe(
        {
          next: data => {
            this.onSearch(p);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }

  onEdit(p: Projet) { this.router.navigateByUrl('editProject/'+p.idprojet); }
}
