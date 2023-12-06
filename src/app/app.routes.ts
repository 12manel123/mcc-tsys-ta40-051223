import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { RandomCharactersComponent } from './random-characters/random-characters.component';
import { SearchComponent } from './search/search.component';
export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'characters', component: CharactersComponent
    },
    {
        path: 'randomcharacters', component: RandomCharactersComponent
    },
    { 
        path: 'search/:term', component: SearchComponent 
    }
    
];
