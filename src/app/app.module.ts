import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatStepperModule, MatInputModule, MatButtonModule, MatTooltipModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { SecondQuestionComponent } from './second-question/second-question.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StepperComponent,
    FirstQuestionComponent,
    SecondQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
