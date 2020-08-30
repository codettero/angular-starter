import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SpongebobPipe } from './spongebob.pipe';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SpongebobPipe,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
