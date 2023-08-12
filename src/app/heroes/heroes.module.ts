import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './Components/list/list.component';
import { HeroComponent } from './Components/hero/hero.component';



@NgModule({
  declarations: [
    ListComponent
    , HeroComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ListComponent
    , HeroComponent
  ]
})
export class HeroesModule { }
