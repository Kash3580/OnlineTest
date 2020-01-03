import {Component,Input} from "@angular/core";

@Component({
      selector:'question',
      template:`
          <div class="well question-wrapper">
          <h1> </h1>
           <label><b>Q: {{question.question}}</b> {{indexdata}}</label>
            <div  class="" *ngFor="let ans of question.incorrect_answers; let i = index">
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio{{i}}" name="answer" class="custom-control-input">
                <label class="custom-control-label" for="customRadio{{i}}">{{ans}}</label>
              </div>
          </div>
          <div class="text-center">
              <button class="btn btn-primary  " type="submit">Next</button>
          </div>
          </div>
      `,
  styles:[`
        .question-wrapper{
                padding:15px 15px;
                background:white;
                    border: solid #f8f9fa;
                -webkit-appearance: textfield;
                  background-color: -internal-light-dark-color(white, black);
                  -webkit-rtl-ordering: logical;
        }
        b{color:gray}



    `]

})

export class QuestionComponent{

@Input() question:any
@Input() indexdata:any

}
