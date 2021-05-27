import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStatistiques: Statistique[] = [
    { _id: '1', titre: 'population1', valeur: 200000, appreciation: 'blabla' },
    { _id: '2', titre: 'population2', valeur: 12000, appreciation: 'blabla' },
  ];
}
