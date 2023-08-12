import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponet } from './Counter/counter.componet';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent
    , CounterComponet
    , HeroComponent
    , ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
