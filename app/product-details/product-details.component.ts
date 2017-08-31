import { Component} from "@angular/core"
import { ProductService} from "../services/product-service"
import {Iproduct} from "../Iproduct/Iproduct";

@Component ({
    templateUrl: '/app/product-details/product-details.component.html'
})

export class ProductDetailsComponent{
    events: Iproduct[]
    constructor(private productService: ProductService){

    }
    ngOnInit() {

        this.productService.getEvents().subscribe(data=>{
            this.events = data;
        });
    }
}