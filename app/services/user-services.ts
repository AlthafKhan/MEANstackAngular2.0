import { Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http, Response} from "@angular/http"
import 'rxjs/add/operator/map';
import {Iproduct} from "../Iproduct/Iproduct"


@Injectable()
export class UserServices {
    constructor(private http: Http){

    }
    regUser(formValues) : Observable<any[]> {
        var data = {
            "firstName": formValues.firstName,
            "lastName": formValues.lastName,
            "userName": formValues.userName,
            "password": formValues.password
        }
        return this.http.post('/register', data)
            .map((response?: Response) => <any[]>response.json());
    }

    logVal(formValues): Observable<any[]> {
        var data = {
            "userName": formValues.userName,
            "password": formValues.password
        }
        return this.http.post('/login', data)
            .map((response?: Response) => <any[]>response.json());

    }



}