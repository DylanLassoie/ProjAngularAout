import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Discipline} from '../entities/discipline.entities';

@Injectable({providedIn:"root"})

export class DisciplineService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getDiscipline(iddiscipline: number): Observable<Discipline> {
    return this.http.get<Discipline>(this.host + '/discipline/' + iddiscipline);
  }

  searchDiscipline(nom: string): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(this.host + '/discipline/rechercheDisciplineParNom?nom=' + nom);
  }

  deleteDiscipline(d: Discipline): Observable<void> {
    return this.http.delete<void>(this.host + '/discipline/delete?id=' + d.iddiscipline);
  }

  save(d: Discipline): Observable<Discipline> {
    return this.http.post<Discipline>(this.host + '/discipline/', d);
  }

  modifyDiscipline(d: Discipline): Observable<Discipline> {
    return this.http.put<Discipline>(this.host + '/discipline/modify' + d.iddiscipline, d);
  }

}
