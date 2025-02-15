import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'error', redirectTo: 'assets/error.html' ,pathMatch:'full'},
    { path: '**', redirectTo: '/login' }
];
