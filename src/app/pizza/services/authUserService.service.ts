import { Injectable } from "@angular/core";
import { UserInterface } from "../models/user";
import { AuthUserApiService, UserData } from "./authUserApiService.service";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthUserService {
    isAuth = new BehaviorSubject<boolean>(false);
    userData = new BehaviorSubject<UserInterface | undefined>(undefined);
    constructor(
        private authUserApiService: AuthUserApiService,
        private router: Router
    ) { }

    public authMe() {
        this.authUserApiService.authMe().subscribe((value: UserInterface) => {
            this.isAuth.next(Boolean(value));
            this.userData.next(value);
        });
    }

    public login(authData: Partial<UserInterface>) {
        this.authUserApiService.login(authData).subscribe((value: UserData) => {
            const { token, data } = value;
            this.isAuth.next(true)
            localStorage.setItem("token", token)
        })
    }

    public register(authData: Partial<UserInterface>) {
        this.authUserApiService.register(authData).subscribe((value: UserData) => {
            const { token, data } = value;
            localStorage.setItem("token", token)
        })
    }

    public logout() {
        localStorage.removeItem("token");
        this.isAuth.next(false);
        this.router.navigate([""])
    }

    public updateUser(user?: UserInterface) {
        if (user) {
            this.authUserApiService.updateUser(user).subscribe(value => {
                this.userData.next(value);
            });
        }
    }
}