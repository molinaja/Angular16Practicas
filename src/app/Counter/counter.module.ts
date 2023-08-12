import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponet } from './Components/counter/counter.componet';



@NgModule({
  declarations: [
    CounterComponet
  ],
  imports: [
    CommonModule
  ], exports:[
    CounterComponet
  ]
})
export class CounterModule { }
