import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {ProductService} from "../services/product-service"

@Component ({
    selector: 'products-list',
    templateUrl: '/app/products-list/products-list.component.html'
})

export class ProductsListComponent {
    constructor (private router: Router,
                 private productService: ProductService){

    }

    list(formValues){
        this.productService.prodEntry(formValues).subscribe(data=>{
            console.log("data successfully posted");
        });
        this.router.navigate(['/']);
    }
}