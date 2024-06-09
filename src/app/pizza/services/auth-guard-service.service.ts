import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthUserComponent } from '../components/auth-user/auth-user.component';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    const isAuth = localStorage.getItem("token")
    const dialog = inject(MatDialog)
    if (isAuth) {
        return true
    } else {
        dialog.open(AuthUserComponent)
        return false;
    }
};