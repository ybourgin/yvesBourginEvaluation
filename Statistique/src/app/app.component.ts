import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public statistique1 = new Statistique('1', 'population1', 200000, 'blabla');
  public statistique2 = new Statistique('2', 'population2', 12000, 'blabla');
}
