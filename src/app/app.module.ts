import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisetwoComponent } from './exercisetwo/exercisetwo.component';
import { ExercisethreeComponent } from './exercisethree/exercisethree.component';
import { ExercisefourComponent } from './exercisefour/exercisefour.component';
import { ExercisefiveComponent } from './exercisefive/exercisefive.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisetwoComponent,
    ExercisethreeComponent,
    ExercisefourComponent,
    ExercisefiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
