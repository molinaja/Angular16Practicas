import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {

  constructor() { }

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

  public onNewCharacter(character: Character): void {

    //debugger;
    this.characters.push(character);

  }

  public onDelCharterByID(index:number):void{

    //console.log(this.characters);
    this.characters.splice(index, 1);
    //console.log(this.characters);

  }

}
