import { Injectable} from "@angular/core"
import {Iproduct} from "../Iproduct/Iproduct"
import {Observable} from "rxjs/Observable"
import {Http, Response} from "@angular/http"
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor(private http: Http){

    }

    getEvents() : Observable<Iproduct[]> {
        return this.http.get('/entries')
            .map((response: Response) => <Iproduct[]>response.json());
    }

    getId(id:number)  : Observable<Iproduct[]> {
         var data ={
             "userId": id
         };
         return this.http.post('/singleEntry', data)
                 .map((response: Response) => <Iproduct[]>response.json());
    }

    prodEntry(formValues) : Observable<any[]> {
        var data = {
            "id": formValues.id,
            "productName": formValues.productName,
            "productCode": formValues.productCode,
            "productDescription": formValues.productDescription,
            "productCost": formValues.productCost
        }
        return this.http.post('/ProdEntry', data)
            .map((response?: Response) => <any[]>response.json());
    }
}
