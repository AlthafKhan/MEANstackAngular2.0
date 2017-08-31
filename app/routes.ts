import { Routes} from "@angular/router"
import {MainPageComponent} from "./main-page.component"
import {ProductsListComponent} from "./products-list/products-list.component"
import {ProductDetailsComponent} from "./product-details/product-details.component"
import {ProductViewComponent} from "./product-view/product-view.component"
import {LoginViewComponent} from "./login-view/login-view.component"
import {RegisterViewComponent} from "./register-view/register-view.component"


export const appRoutes: Routes = [
    {path: 'newEvents', component: ProductsListComponent},
    {path: 'events', component: ProductDetailsComponent},
    {path: 'login', component: LoginViewComponent},
    {path: 'register', component: RegisterViewComponent},
    {path: 'events/:id', component: ProductViewComponent},
    {path: '404', component: MainPageComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'}
]

