import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzaInterface } from '../../../../models/pizza';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pizza-cart-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pizza-cart-item.component.html',
    styleUrl: './pizza-cart-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaCartItemComponent {
    @Input() cartItem!: PizzaInterface;
    @Output() incrementEvent = new EventEmitter<number>();
    @Output() decrementEvent = new EventEmitter<number>();
    @Output() removeCartItemEvent = new EventEmitter<number>();
    constructor() { }

    public increment(id: number) {
        this.incrementEvent.emit(id);
        console.log("+")
    }

    public decrement(id: number) {
        this.decrementEvent.emit(id);
        console.log("-")
    }

    public removeCartItem(id: number) {
        this.decrementEvent.emit(id);
        console.log("x")
    }

}
