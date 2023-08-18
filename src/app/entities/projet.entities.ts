import {Discipline} from './discipline.entities';
export interface Projet {
  idprojet: number;
  nom:  string;
  datedebut:  Date;
  datefin:  Date;
  cout: number;
  discipline: Discipline;
}
