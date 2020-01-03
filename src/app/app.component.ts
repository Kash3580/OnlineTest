import{Component}  from  '@angular/core';


@Component({
      selector:'app-root',
      template: `
        <topMenu></topMenu>
         <router-outlet></router-outlet>
           `
})

export class AppComponent{

  title="Data Analysis Application";
}
