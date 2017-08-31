import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {UserServices} from "../services/user-services"
import {Response} from "@angular/http"

@Component ({
    templateUrl: '/app/login-view/login-view.component.html'
})

export class LoginViewComponent {
    constructor(private router:Router,
                private userServices: UserServices){

    }
    currentUser: any
    login(formValues) {
        this.userServices.logVal(formValues).subscribe((data:any)=>{
            console.log("Login Sucssfull");
            alert("Login Sucessfull");
                this.router.navigate(['/events'])
            }, (err:any) => {
                    alert("UserId or Password is Incorrect");
                    this.router.navigate(['/'])
            }
        );

    }

}