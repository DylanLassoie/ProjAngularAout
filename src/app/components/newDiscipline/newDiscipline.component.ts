import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisciplineService} from '../../services/discipline.service';

@Component({
  selector: 'app-newDiscipline',
  templateUrl: './newDiscipline.component.html',
  styleUrls: ['./newDiscipline.component.css']
})

export class NewDisciplineComponent implements OnInit {
  disciplineFormGroup?: FormGroup;
  submitted = false;
  iddiscipline:number|null=null;
  constructor(private fb: FormBuilder, private disciplineService: DisciplineService) {
  }

  ngOnInit() : void {
    this.disciplineFormGroup = this.fb.group({
      nom: ["", Validators.required],
      description: ["", Validators.required],
      niveau: ["", [Validators.required,Validators.min(1),Validators.max(10)]],
    });
  }

  onSaveDiscipline() {
    this.submitted = true;
    if (this.disciplineFormGroup?.invalid) { return; }

    this.disciplineService.save(this.disciplineFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.iddiscipline=data.iddiscipline},
      err => {
        alert(err.headers.get("error"));
      });
  }
}
