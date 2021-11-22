import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

export const appRoutes:Routes=[
    {
        path: 'signup', component: AuthComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: '', redirectTo: '/signup', pathMatch: 'full'
    }
];