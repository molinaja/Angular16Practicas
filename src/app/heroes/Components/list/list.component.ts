import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public title: string = 'List Componet';

  public heroesLst:string[] = ['Spider Man', 'Iron Man', 'Dead Pool', 'Wollverine'];
  public deletedHero?:string;

  public removeLastHero():void{

   this.deletedHero = this.heroesLst.pop();

  }


}
