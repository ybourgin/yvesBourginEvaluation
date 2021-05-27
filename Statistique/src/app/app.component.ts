import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueAPIService } from './services/statistique-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public statistique1 = new Statistique('1', 'population1', 200000, 'blabla');
  // public statistique2 = new Statistique('2', 'population2', 12000, 'blablabla');
  // public statistique3 = new Statistique(
  //   '3',
  //   'population3',
  //   56000,
  //   'blablablabla'
  // );
  public tabStatistique: Statistique[] = [];
  StatistiqueAPIService: any;

  constructor(private apiStatistique: StatistiqueAPIService) {
    // this.tabStatistique.push(this.statistique1, this.statistique2);
    // setTimeout(() => {
    //   this.tabStatistique.push(this.statistique3);
    // }, 1000);

    {
      this.apiStatistique.getStatistique().then((data: Statistique[]) => {
        this.tabStatistique = data;
      });
    }
  }
  supprimerStatistique(uneStatistique: Statistique) {
    console.log('supprimer ' + uneStatistique.titre);
    this.apiStatistique
      .deleteStatistique(uneStatistique._id)
      .then((statut: string) => {
        if (statut === 'OK') {
          let indexStatistique = this.tabStatistique.findIndex(
            (c) => c._id === uneStatistique._id
          );
          if (indexStatistique != -1) {
            this.tabStatistique.splice(indexStatistique, 1);
          }
        } else {
          alert('Problème lors de la suppression');
        }
      });
  }
}
