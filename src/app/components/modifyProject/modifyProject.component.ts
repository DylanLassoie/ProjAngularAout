import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Projet} from '../../entities/projet.entities';

@Component({
  selector: 'app-modifyProject',
  templateUrl: './modifyProject.component.html',
  styleUrls: ['./modifyProject.component.css']
})

export class ModifyProjectComponent implements OnInit {
  projetFormGroup?: FormGroup;
  submitted=false;
  @Input() projet?:Projet;
  deleted=false;
  constructor(private projectService: ProjectService, private fb:
    FormBuilder) {}

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      idprojet: [this.projet?.idprojet],
      nom: [this.projet?.nom, Validators.required],
      datedebut: [this.projet?.datedebut, Validators.required],
      datefin: [this.projet?.datefin, Validators.required],
      cout: [this.projet?.cout,Validators.required]
    });
  }

  onUpdateProjet(): void {
    this.submitted = true;
    if (this.projetFormGroup?.invalid) {
      return;
    }
    let projetmaj:Projet=this.projetFormGroup?.value;
    if(this.projet) {
      projetmaj.discipline = this.projet.discipline;
      this.projectService.modifyProject(projetmaj).subscribe({
        next: data => alert('maj ok'),
        error : err => alert(err.headers.get("error"))
      })
    }
  }

  onDeleteProjet() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projectService.deleteProjet(this.projetFormGroup?.value).
      subscribe(data => {
          alert('effacement ok');
          this.deleted=true;
        },
        err => {alert(err.headers.get("error"));
        });
    }
  }
}
