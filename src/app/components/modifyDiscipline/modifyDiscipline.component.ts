import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisciplineService} from '../../services/discipline.service';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Projet} from "../../entities/projet.entities";

@Component({
  selector: 'app-modifyDiscipline',
  templateUrl: './modifyDiscipline.component.html',
  styleUrls: ['./modifyDiscipline.component.css']
})

export class ModifyDisciplineComponent implements OnInit {
  disciplineFormGroup?: FormGroup;
  submitted = false;
  idDiscipline: number;
  projets?: Projet[];

  constructor(private disciplineService: DisciplineService, private projetService:
    ProjectService, private fb: FormBuilder, activatedRoute: ActivatedRoute) {
    this.idDiscipline = activatedRoute.snapshot.params.iddiscipline;
  }

  ngOnInit(): void {
    this.disciplineService.getDiscipline(this.idDiscipline).subscribe(
      discipline => {
        this.disciplineFormGroup = this.fb.group({
          iddiscipline: [discipline.iddiscipline, Validators.required],
          nom: [discipline.nom, Validators.required],
          description: [discipline.description, Validators.required],
          niveau: [discipline.niveau,
            [Validators.required, Validators.min(1), Validators.max(10)]],
        })
      });
  }

  onUpdateDiscipline(): void {
    this.submitted = true;
    if (this.disciplineFormGroup?.invalid) {
      return;
    }

    this.disciplineService.modifyDiscipline(this.disciplineFormGroup?.value).subscribe(data => {
        alert('maj ok')
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onSeeProjets() {
    this.projetService.getProjetDiscipline(this.idDiscipline).subscribe(data => {
        this.projets = data
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onAddProjet(proj: Projet) {
    this.projets?.push(proj);
  }
}
