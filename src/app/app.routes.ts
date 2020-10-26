import {Routes, RouterModule} from '@angular/router'; //esta es la liberia de angular
import {HomeComponent} from './Componentes/home/home.component'; // aqui llamamos el componente
import { ContactoComponent } from './Componentes/contacto/contacto.component'; // aqui hacemos lo mismo
import { ShopComponent } from './Componentes/shop/shop.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { AdminComponent } from './Componentes/admin/admin.component';
import { AuthGuard } from './guars/auth.guard';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent }, 
    {path: 'contacto', component: ContactoComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);