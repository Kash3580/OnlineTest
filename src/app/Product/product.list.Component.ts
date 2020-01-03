import{ Component}  from "@angular/core";

@Component({
        selector:'product-list',
        template: `
          <h1> this is child component</h1>
          <p>{{product.productName}}</p>
          <Product-Price #baseProduct [Product]="product"></Product-Price>
          <button (click)="baseProduct.logClick()">Click Me!! </button>
        `,
})

export  class ProductListComponent{
         product={
                    productid:101,
                    productName:'Cherokee shirt',
                    Price:45.43,
                    Qty:10,
                    color:{
                            colorid:'Red01',
                            colorName:'Red'
                          }
                  }

         }
