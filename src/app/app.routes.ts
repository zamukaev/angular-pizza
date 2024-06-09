import { Routes } from '@angular/router';
import { PizzasListComponent } from './pizza/components/pizza/pizzas-list/pizzas-list.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './pizza/components/login/login.component';
import { RegisterComponent } from './pizza/components/register/register.component';
import { AuthGuard } from './pizza/services/auth-guard-service.service';
import { inject } from '@angular/core';


export const routes: Routes = [
    { path: '', component: PizzasListComponent },
    {
        path: 'cart',
        canActivate: [AuthGuard],
        loadComponent: () => import("./pizza/components/pizza/pizza-cart/pizza-cart.component")
            .then(m => m.PizzaCartComponent)
    },
    { path: 'forms', component: FormsComponent }
];
