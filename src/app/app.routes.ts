import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


export const routes: Routes = [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component:LandingpageComponent},
      
];
