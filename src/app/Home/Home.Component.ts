import {Component} from "@angular/core";

@Component({

    template:`
        <div class="container">
           <div class="row">

               <div class="jumbotron text-center spacer">
                  <h2 class="text-center"> Welcome to our Online test </h2>
                 <p class="lead">our test consists of tasks used to screen the skills of job applicants.Programming tests focus on a developer's ability to create solutions, implement new functionality, analyze code, or fix a bug. </p>
                 <hr class="my-4">
                 <p>Please proceed by clicking on below button</p>
                 <a class="btn btn-primary btn-lg " [routerLink]="['/questionlist']" href="#" role="button" (click)="startTest()">Start Test!</a>
               </div>
           </div>

        </div>

    `,
    styles:[
            `
            about{
              color: #1C7ED1;
              weight:500;
            }
            .spacer{
            margin-top:50px;
            }

            `
    ]

})

export class HomeComponent{

  title="Home Page";
  startTest(){


  }
}
