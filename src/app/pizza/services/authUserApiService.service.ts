import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { UserInterface } from "../models/user";

export interface UserData {
    data: UserInterface;
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthUserApiService {
    apiUrl = 'https://26e232209c1d2e1f.mokky.dev/';
    constructor(private http: HttpClient) { }

    public authMe(): Observable<UserInterface> {
        const token = localStorage.getItem("token");
        return this.http.get<UserInterface>(this.apiUrl + "auth_me", { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) })
    }

    public login(authData: Partial<UserInterface>): Observable<UserData> {
        return this.http.post<UserData>(this.apiUrl + "auth", authData)
    }

    public register(authData: Partial<UserInterface>): Observable<UserData> {
        return this.http.post<UserData>(this.apiUrl + "register", authData)
    }

    public updateUser(user: UserInterface): Observable<UserInterface> {
        return this.http.patch<UserInterface>(this.apiUrl + "/users/" + user.id, user)
    }
}