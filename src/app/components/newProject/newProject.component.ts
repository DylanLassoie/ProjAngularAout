import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Projet} from '../../entities/projet.entities';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-newProject',
  templateUrl: './newProject.component.html',
  styleUrls: ['./newProject.component.css']
})

export class NewProjectComponent implements OnInit {

  @Input() dis?: FormGroup;
  @Output() newProjet = new EventEmitter<Projet>();
  projetFormGroup?: FormGroup;
  submitted = false;
  proj?: Projet;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      nom: ["", Validators.required],
      datedebut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      datefin: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      cout: ["", Validators.required],
    });
  }

  onSaveProjet() {
    var nproj = this.projetFormGroup?.value;
    nproj.discipline = this.dis?.value;
    this.projectService.save(nproj).subscribe(data => {
        alert('sauvegarde ok');
        this.proj = data;
        this.newProjet.emit(data)
      },
      err => {
        alert(err.headers.get("error"));
      });
  }


}
