import {Component} from "@angular/core"
import {ProductService} from "../services/product-service"
import {Router} from "@angular/router"
import {Iproduct} from "../Iproduct/Iproduct"
import {ActivatedRoute} from "@angular/router"

@Component({
    templateUrl: '/app/product-view/product-view.component.html'
})

export class ProductViewComponent {
    event: any
    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private router: Router){

    }
    ngOnInit() {
        this.event= this.productService.getId(+this.route.snapshot.params['id']).subscribe(data=>{
            this.event = data;
        });
    }

    back() {
        this.router.navigate(['/events']);
    }
}