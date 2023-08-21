import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  public characters: Character[] = [

    {
      name: 'Goku',
      power: 500
    }, {
      name: 'Krillin',
      power: 9500
    }, {
      name: 'Vegetta',
      power: 8000
    }, {
      name: 'Napa',
      power: 5000
    }, {
      name: 'Cell',
      power: 20000
    }

  ];

  onNewCharacter(character: Character): void {

    //debugger;
    this.characters.push(character);

  }

}
