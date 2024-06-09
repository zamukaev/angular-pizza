import { Component, OnInit } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { PizzaCartItemComponent } from "./pizza-cart-item/pizza-cart-item.component";
import { PizzaService } from "../../../services/pizzaService.service";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-pizza-cart",
    standalone: true,
    templateUrl: "./pizza-cart.component.html",
    styleUrls: ["./pizza-cart.component.scss"],
    imports: [PizzaCartItemComponent, CommonModule, RouterLink, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaCartComponent implements OnInit {
    public cart$ = this.pizzaService.cart
    constructor(
        private pizzaService: PizzaService,
    ) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.pizzaService.getCart();
        }, 3000)
    }
}