import {Component,Input} from "@angular/core";

@Component({
      selector:'question',
      template:`
            <div class="container">
              <div class="row">
                  <div class="jumbotron question-wrapper">
                  <h1> </h1>
                  <div class="alert alert-danger" role="alert" [hidden]="!errMsg">
                      Please select the answer"
                      </div>
                   <label><b>Q: {{question.question}}</b> {{indexdata}}</label>
                    <div  class="" *ngFor="let ans of question.incorrect_answers; let i = index">
                      <div class="custom-control custom-radio ">
                        <input type="radio"  id="customRadio{{i}}" name="answer" class="custom-control-input" (change)="onItemChange(i)" >
                        <label class="custom-control-label"  [style.color]="SelectedRadio=='customRadio'+i ? classname:''" for="customRadio{{i}}" >{{ans}}</label>

                      </div>
                  </div>
                  <hr/>
                  <div class="text-center">
                      <button class="btn btn-success " [style.background-color]="IsSubmitted?'Gray':''" type="submit" [disabled]="IsSubmitted" (click)="HandleAnswer()">Submit</button>
                    &nbsp;  <button class="btn btn-primary" type="submit" (click)="nextQuestion()">Next</button>
                  </div>
          </div>
          </div>
          </div>

          `,
  styles:[`
        .green{
          color:green;
        }
        .red{
          color:red;
        }
        .question-wrapper{
                margin-top:20px;
                width:70%;


                    border: solid #f8f9fa;
                -webkit-appearance: textfield;
                  background-color: -internal-light-dark-color(white, black);
                  -webkit-rtl-ordering: logical;
        }
        b{color:gray}

        .custom-radio:hover{
          font-weight:600;

          display: inline-block;
        }



    `]

})

export class QuestionComponent{

@Input() question:any
@Input() indexdata:any

  classname:any=""
  SelectedRadio:any=""
  SelectedRadioIndex:any=""
  IsSubmitted:any=false
  errMsg:any=false

  onItemChange(index)
  {
    this.SelectedRadioIndex=index;

  }
HandleAnswer()
{
   if (this.SelectedRadioIndex==="")
      {
        this.errMsg=true;

      }
   else
   {
         this.errMsg=false;
         this.IsSubmitted=true;
         this.SelectedRadio="customRadio"+this.SelectedRadioIndex;

          if(this.question.incorrect_answers[this.SelectedRadioIndex]===this.question.correct_answer)
          {
            this.classname="green";
              console.log("correct answer")
          }

          else
          {
            this.classname="red";
               console.log("Wrong answer")
          }
      this.SelectedRadioIndex=""
   }


}

nextQuestion()
{
 this.question=this.nextQuestion
}


}
