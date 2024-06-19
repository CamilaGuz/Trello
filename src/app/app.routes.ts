import { Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';


export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/register' } 
];

export default routes;