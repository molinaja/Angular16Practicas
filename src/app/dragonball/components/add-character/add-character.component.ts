import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter();

  public characterAdd: Character = {
    name: "",
    power: 0
  };

  public emitCharacter(): void {

    if (this.characterAdd.name.trim() === "") {
      return;
    }

    this.onNewCharacterEmitter.emit(this.characterAdd);
    this.characterAdd = { name: '', power: 0 };

    //this.onNewCharacterEmitter.emit({...this.characterAdd});
    //this.characterAdd.name = "";
    //this.characterAdd.power = 0;

  }

}
