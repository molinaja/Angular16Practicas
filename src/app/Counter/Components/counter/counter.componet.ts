
import { Component } from "@angular/core";


@Component({

  selector: 'app-counter'
  , templateUrl: './counter.componet.html',

})
export class CounterComponet {
  public title: string = 'Counter Component';
  public counter: number = 0;

  increaseCounter(param: number): void {

    this.counter += param;

  }

  decreaseCounter(param: number): void {

    this.counter -= param;

  }

  resetCounter(): void {

    this.counter = 0;

  }


}
