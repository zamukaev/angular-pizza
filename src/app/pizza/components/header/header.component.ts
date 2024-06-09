import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthUserComponent } from "../auth-user/auth-user.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthUserService } from "../../services/authUserService.service";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { Subject } from "rxjs";
import { UserInterface } from "../../models/user";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    imports: [RouterLink, CommonModule, MatButtonModule],
    standalone: true
})

export class HeaderComponent {
    public isAuth = this.userAuthService.isAuth;
    public user = this.userAuthService.userData;
    constructor(
        private userAuthService: AuthUserService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.userAuthService.authMe()
    }

    openDialog() {
        this.dialog.open(AuthUserComponent, {})
    }

    logout() {
        this.userAuthService.logout()
    }
}