import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelCharacterByIDEmitter: EventEmitter<number> = new EventEmitter();

  @Input()
  public Lstcharacters:Character[] = [];

  public deleteCharacterInList(index:number):void{

    //console.log({index});
    this.onDelCharacterByIDEmitter.emit(index);

  }

}
