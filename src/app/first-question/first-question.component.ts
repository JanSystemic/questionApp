import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {
  firstAnswer: string = "";
  whyAnswer: string = "";
  answers:any = [];
  lastAnswer="";
  emotionalAnswer ="";

  stage = 1;
  questionCount = 0;
  rightQuestions = [
    'на чем сфокусироваться чтобы испытать', 
    'какое значение надо придать ситуации', 
    'во что верить чтобы испытать'
  ];
  constructor() { }
  addAnswer() {
    console.log('jan somethink happen');
    this.answers.push(this.firstAnswer);
    this.firstAnswer = '';
    this.stage++;
  }

  addWhyAnswer() {
    console.log(this.whyAnswer);
    this.answers.push(this.whyAnswer);
    console.log(this.answers[this.answers.length - 1]);
    this.whyAnswer = '';
  }
  nextPart() {
      this.stage++;
      this.lastAnswer = this.answers[this.answers.length - 1]; }

  nextQuestion() {
    this.questionCount++;
    this.answers.push(this.emotionalAnswer);
    this.emotionalAnswer = '';
    if (this.questionCount > this.rightQuestions.length - 1){
        this.stage = 4;
    }
  }

  toStart() {
    this.stage = 1;
  }


  ngOnInit() {
  }

}
