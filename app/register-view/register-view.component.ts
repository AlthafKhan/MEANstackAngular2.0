import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {UserServices} from "../services/user-services"

@Component ({
    templateUrl: '/app/register-view/register-view.component.html'
})

export class RegisterViewComponent {
    constructor(private router: Router,
                private userServices: UserServices){

    }

    register(regValues){
        this.userServices.regUser(regValues).subscribe(data=>{
            console.log("data successfully posted");
        });
        this.router.navigate(['/login']);
    }
}