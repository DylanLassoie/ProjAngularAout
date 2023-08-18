import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DisciplineService} from '../../services/discipline.service';
import {Observable} from 'rxjs';
import {Discipline} from '../../entities/discipline.entities';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})

export class DisciplineComponent implements OnInit {
  discipline?: Discipline[];
  constructor(private disciplineService: DisciplineService, private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    this.disciplineService.searchDiscipline(value.nom).subscribe(
      {
        next: data => {this.discipline = data}
      });
  }

  onNewDiscipline() {  this.router.navigateByUrl('newDiscipline'); }

  onDelete(d: Discipline) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.disciplineService.deleteDiscipline(d).subscribe(
        {
          next: data => {
            this.onSearch(d);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }

  onEdit(d: Discipline) { this.router.navigateByUrl('editDiscipline/'+d.iddiscipline); }
}
