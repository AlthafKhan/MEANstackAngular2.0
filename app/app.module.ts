import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {RouterModule} from "@angular/router"
import {HttpModule} from "@angular/http"
import {appRoutes} from "./routes"
import {FormsModule} from "@angular/forms"

import {Iproduct} from "./Iproduct/Iproduct"
import {ProductService} from "./services/product-service"
import {UserServices} from "./services/user-services"

import {MainPageComponent} from "./main-page.component"
import {NavbarComponent} from './nav/navbar.component'
import {ProductsListComponent} from "./products-list/products-list.component"
import {ProductDetailsComponent} from "./product-details/product-details.component"
import {ProductViewComponent} from "./product-view/product-view.component"
import {LoginViewComponent} from "./login-view/login-view.component"
import {RegisterViewComponent} from "./register-view/register-view.component"

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [
        MainPageComponent,
        NavbarComponent,
        ProductsListComponent,
        ProductDetailsComponent,
        ProductViewComponent,
        LoginViewComponent,
        RegisterViewComponent
    ],

    providers: [
        ProductService,
        UserServices
    ],
    bootstrap: [
        MainPageComponent
    ]

})

export class AppModule{}