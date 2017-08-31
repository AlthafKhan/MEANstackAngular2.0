import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {UserServices} from "../services/user-services"

@Component ({
    selector: 'nav-bar',
    templateUrl: '/app/nav/navbar.component.html',
    styles: [`
    li > a.active {color: #f97924;}
    `]
})

export class NavbarComponent {
    constructor(private router: Router,
                private userServices: UserServices){

    }
}