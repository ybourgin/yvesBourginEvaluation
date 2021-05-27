import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueAPIService {
  constructor(private http: HttpClient) {}
  tabStatistique: Statistique[] = [];

  getStatistique(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr')
      .toPromise()
      .then((obj: any) => {
        for (let o of obj) {
          this.tabStatistique.push(
            new Statistique(o.id, o.title, o.value, o.appreciation)
          );
        }
        return this.tabStatistique;
      });
  }
  deleteStatistique(idStatistique: string): Promise<'OK' | 'KO'> {
    return this.http
      .delete('https://stats.naminilamy.fr/' + idStatistique)
      .toPromise()
      .then(
        () => 'OK',
        () => {
          return 'KO';
        }
      );
  }
}
