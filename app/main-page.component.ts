import {Component} from "@angular/core"

@Component ({
    selector: 'main-page',
    template: `
    <div>
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    </div>
    `,
    templateUrl: "/app/main-page.component.html"
})

export class MainPageComponent {

}