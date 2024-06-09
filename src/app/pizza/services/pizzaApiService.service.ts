import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PizzaInterface } from "../models/pizza";
import { Injectable } from "@angular/core";
import { UserInterface } from "../models/user";
import { AuthUserService } from "./authUserService.service";

@Injectable({
    providedIn: 'root'
})
export class PizzaApiService {
    apiUrl = 'https://26e232209c1d2e1f.mokky.dev/';
    constructor(
        private http: HttpClient,
    ) { }

    public getPizzas(): Observable<PizzaInterface[]> {
        return this.http.get<PizzaInterface[]>(this.apiUrl + "pizza");
    }
    public addPizzaToCart(pizza: PizzaInterface) {

    }
}