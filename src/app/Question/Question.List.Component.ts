import {Component,OnInit} from "@angular/core"
import  {QuestionService} from '../Question/Question.Service'

@Component({
    selector:"question-list",
    template:`
    <div  *ngFor="let Question of Questions"></div>
     <div class="Well"> {{Question.category}}
     <question *ngFor="let Question of Questions; let $i=index" [question]="Question" [indexdata]="$i"></question>

     </div>

    `



})
export class QuestionListComponent implements OnInit{
  Questions:any
  constructor(private questionService:QuestionService)
  {

  }

  ngOnInit(){
    this.Questions=this.questionService.getQuestions();
  }

}
