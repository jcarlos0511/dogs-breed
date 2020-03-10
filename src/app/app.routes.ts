import { Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalComponent } from './components/animal/animal.component';
import { SeekerComponent } from './components/seeker/seeker.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'animals', component: AnimalsComponent},
    { path: 'animal/:id', component: AnimalComponent},
    { path: 'seeker/:termino', component: SeekerComponent},
    { path: '**', pathMatch:'full', redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

