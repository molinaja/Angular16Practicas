import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public title: string = 'List Componet';

  public heroesLst:string[] = ['Item1', 'Item2', 'Item3', 'Item4'];
}
