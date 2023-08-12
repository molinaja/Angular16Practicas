import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "iron man";
  public age: number = 40;
  public title: string = 'Hero Componet'
  public showHeroName: boolean = true

  get capitalizedName(): string {

    return this.name.toUpperCase();
  }

  public getherodesc(): string {

    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = "spiderman";
    this.showHeroName = false;

  }

  public changeAge(): void {

    this.age = 25;

  }

  public resetForm(): void {

    this.showHeroName = true;
    this.name = "iron man";
    this.age = 40;

  }

}
