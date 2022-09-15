import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {




  data: any = {
    sect1: "-	La passion et le désir de ‘’franc succès’’ qui sous-tend chaque mission  que nos clients nous confient ",
    sect2: "-	La grande diversité de nos  experts free lance : nos experts free lance viennent d’horizons divers : Afrique,  Inde, Chine,  Europe, Afrique du Nord ; Nos partenariats  ont démarré pour la plupart depuis 2007, bien avant la création de Segalsine. Ils sont photographes, directeurs artistiques, ingénieurs IT , Ingénieurs agronomes; trouble shooters, transitaires , laborantins,  experts agrées en certifications",
    sect3: "- Une équipe 100 % Trilingue : Nous parlons tous anglais,  français et wolof . La langue que vous choisissez parmi ces 3,  pour nous contacter  devient  la notre ."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
