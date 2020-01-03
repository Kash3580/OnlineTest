import {Component,Input, Output, EventEmitter} from "@angular/core";

@Component({

 selector:'Product-Price',
template:`
  <div class="well"> Price : {{Product.Price}}</div>
  <input type="button" (click)="HandleClick()" value="data"/>
  `
})

export class ProductPriceComponent
{
  @Input() Product:any
  @Output() eventClick= new EventEmitter()


  HandleClick()
  {
    this.eventClick.emit("this is child data passed to Parent");
  }

  logClick()
  {
   console.log("this  is another example of parent child data access");
  }

}
