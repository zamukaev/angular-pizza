import { Component, EventEmitter, Input, Output } from "@angular/core";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = "clear"
}

@Component({
    standalone: true,
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
    imports: []
})
export class ButtonComponent {
    @Input() kind!: ButtonTheme;
    @Input() href!: string;
    @Output() onClickEvent = new EventEmitter<string>();
    constructor() { }

    public onClick(id: string) {
        id ? this.onClickEvent.emit(id) : this.onClickEvent.emit();
    }
}