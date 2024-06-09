import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
export interface RateOptions {
    rates: number;
    text?: string;
}
@Component({
    selector: 'app-rate',
    standalone: true,
    imports: [CommonModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: RateComponent
        }
    ],
    templateUrl: './rate.component.html',
    styleUrl: './rate.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent implements ControlValueAccessor, OnInit {
    @Input() options!: RateOptions;

    public currentRate!: number;
    public text?: string;
    public ratesArr: number[] = []

    public disabled: boolean = false;
    public touched: boolean = false;

    onChange = (currentRate: number) => { }
    onTouched = () => { }

    constructor() { }
    public ngOnInit(): void {
        this.fillRatesArr()
    }

    public onRate(index: number) {
        this.markAsTouched()
        if (!this.disabled) {
            this.currentRate = index;
            this.onChange(this.currentRate)
        }
    }

    //Control Access Value start
    public writeValue(rate: number): void {
        this.currentRate = rate;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
    public markAsTouched() {
        if (!this.touched) {
            this.onTouched()
            this.touched = true;
        }
    }
    //Control Access Value end

    private fillRatesArr() {
        let cond = true;
        let count = 1;

        while (cond) {
            this.ratesArr.push(count)

            if (count === this.options.rates) {
                cond = false;
            }
            count++;
        }
    }
}
