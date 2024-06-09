import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UserInterface } from "../../models/user";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthUserService } from "../../services/authUserService.service";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { BehaviorSubject, Subject } from "rxjs";


@Component({
    selector: "app-auth-user",
    templateUrl: "./auth-user.component.html",
    styleUrls: ["./auth-user.component.scss"],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        CommonModule,
        LoginComponent,
        RegisterComponent,
        MatFormField,
        MatInputModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthUserComponent implements OnInit {

    public haveToLogin: boolean = true;
    authData = new FormGroup({
        email: new FormControl("", [Validators.email, Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    registerData = new FormGroup({
        username: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.email, Validators.required]),
        password: new FormControl("", [Validators.required]),
    })

    constructor(
        private authUserService: AuthUserService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        console.log("ok")
    }

    public haveToRegisterHandler() {
        this.haveToLogin = false;
    }

    public haveToLoginHandler() {
        this.haveToLogin = true;
    }

    public login() {
        if (this.authData.valid) {
            this.authUserService.login(this.authData.value)
        }
        this.dialog.closeAll()
    }

    public register() {
        if (this.registerData.valid) {
            this.authUserService.register({ ...this.registerData.value, basket: [] });
        }
        this.dialog.closeAll()
    }
}