import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Discipline} from '../entities/discipline.entities';
import {Projet} from '../entities/projet.entities';
import {formatDate} from '@angular/common';

@Injectable({providedIn:"root"})

export class ProjectService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getProjet(idprojet: number): Observable<Projet> {
    return this.http.get<Projet>(this.host + '/projet/' + idprojet);
  }

  searchProjet(nom: string): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.host + '/projet/rechercheParNom?nom='+nom);
  }

  searchCoutProjet(cout: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.host + '/projet/cout=' + cout);
  }

  getProjetDiscipline(iddiscipline: number) : Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + '/projet/iddiscipline=' + iddiscipline);
  }

  deleteProjet(p: Projet): Observable<void> {
    return this.http.delete<void>(this.host + '/projet/delete?id=' + p.idprojet);
  }

  save(p: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.host + '/projet/', p);
  }

  modifyProject(p: Projet): Observable<Projet> {
    return this.http.put<Projet>(this.host + '/modifyProject?id=' + p.idprojet, p);
  }
}
