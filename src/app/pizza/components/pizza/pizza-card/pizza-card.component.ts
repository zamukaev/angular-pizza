import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PizzaInterface } from "../../../models/pizza";
import {
    MatCardModule,
    MatCard,
    MatCardImage,
    MatCardTitle,
    MatCardActions,
    MatCardTitleGroup
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { AuthUserComponent } from "../../auth-user/auth-user.component";
import { AuthUserService } from "../../../services/authUserService.service";
@Component({
    selector: 'app-pizza-card',
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatCard,
        MatButton,
        MatCardImage,
        MatCardTitleGroup,
        MatCardActions,
        MatCardTitle
    ],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PizzaCardComponent implements OnInit {
    @Input() pizza?: PizzaInterface;
    @Output() onAddToCartEmitter = new EventEmitter<any>();
    public selectedSize?: number;
    public selectedType?: string;
    private isAuth = this.userAuthService.isAuth;
    constructor(
        private dialog: MatDialog,
        private userAuthService: AuthUserService,
    ) { }
    ngOnInit(): void {
        this.selectedSize = this.pizza?.size[0];
        this.selectedType = this.pizza?.type[0];
    }

    public onAddToCartHandle(pizza?: PizzaInterface) {
        if (!this.isAuth.value) {
            this.dialog.open(AuthUserComponent)
        }
        this.onAddToCartEmitter.emit({ ...pizza, size: this.selectedSize, type: this.selectedType })
    }
    public selectPizzaSize(index: number) {
        this.selectedSize = this.pizza?.size[index];
    }
    public selectPizzaType(index: number) {
        this.selectedType = this.pizza?.type[index];
    }
}