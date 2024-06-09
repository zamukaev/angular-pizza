import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../../../services/pizzaService.service';
import { PizzaCardComponent } from '../pizza-card/pizza-card.component';
import { PizzaInterface } from '../../../models/pizza';

@Component({
    selector: 'app-pizzas-list',
    standalone: true,
    imports: [NgFor, CommonModule, PizzaCardComponent],
    templateUrl: './pizzas-list.component.html',
    styleUrl: './pizzas-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzasListComponent implements OnInit {
    public pizzas$ = this.pizzaService.pizzas
    constructor(private pizzaService: PizzaService) { }

    ngOnInit(): void {
        this.pizzaService.getPizzas();
        // this.pizzaService.getCart()
    }

    onAddToCartHandle(pizza: PizzaInterface) {
        this.pizzaService.addPizzaToCart(pizza)
    }
}
