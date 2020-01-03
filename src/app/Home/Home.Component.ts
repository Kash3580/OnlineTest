import {Component} from "@angular/core";

@Component({
    selector:"test-about",
    template:`
        <div class="container">
           <div class="row">

               <div class="jumbotron text-center">
                  <h2 class="text-center"> Welcome to our Online test </h2>
                 <p class="lead">our test consists of tasks used to screen the skills of job applicants.Programming tests focus on a developer's ability to create solutions, implement new functionality, analyze code, or fix a bug. </p>
                 <hr class="my-4">
                 <p>Please proceed by clicking on below button</p>
                 <a class="btn btn-primary btn-lg " href="#" role="button" (click)="startTest()">Start Test!</a>
               </div>
           </div>
           <question-list></question-list>
        </div>

    `,
    styles:[
            `
            about{
              color: #1C7ED1;
              weight:500;
            }
            `
    ]

})

export class HomeComponent{

  title="Home Page";
  startTest(){
alert("started...");

  }
}
