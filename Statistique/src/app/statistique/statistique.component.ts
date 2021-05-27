import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  @Input() public uneStatistique!: Statistique;

  @Output() public demandeSupp: EventEmitter<void>;
  constructor() {
    this.demandeSupp = new EventEmitter();
  }

  ngOnInit(): void {}

  clicBouton() {
    console.log('click');
    this.demandeSupp.emit();
  }
}
