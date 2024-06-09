import { BehaviorSubject, Subject } from "rxjs";
import { PizzaApiService } from "./pizzaApiService.service";
import { PizzaInterface } from "../models/pizza";
import { Injectable } from "@angular/core";
import { AuthUserService } from "./authUserService.service";
import { UserInterface } from "../models/user";
@Injectable({
    providedIn: 'root'
})
export class PizzaService {
    public pizzas = new BehaviorSubject<PizzaInterface[]>([]);
    public cart = new BehaviorSubject<PizzaInterface[] | undefined>(undefined);
    private userData = this.authUserService.userData;
    constructor(
        private pizzaApiService: PizzaApiService,
        private authUserService: AuthUserService
    ) { }

    public getPizzas() {
        this.pizzaApiService.getPizzas().subscribe(pizzas => {
            this.pizzas.next(pizzas);
        })
    }

    public getCart() {
        this.cart.next(this.userData.value?.basket);
    }

    public addPizzaToCart(pizza: PizzaInterface) {
        const user = this.userData.value;
        user?.basket?.push(pizza);
        this.userData.next(user);
        this.authUserService.updateUser(this.userData.value)
    }
}