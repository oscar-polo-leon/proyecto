import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Importa el componente login
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { PricesComponent } from './prices/prices.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'features', component: FeaturesComponent },  // Ruta de login
  { path: 'prices', component: PricesComponent },
  { path: 'about-us', component: AboutUsComponent },
];
