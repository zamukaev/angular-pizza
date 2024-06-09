import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatInputModule,
        MatFormFieldModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}
