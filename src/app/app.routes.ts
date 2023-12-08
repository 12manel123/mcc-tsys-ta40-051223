import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { RandomCharactersComponent } from './random-characters/random-characters.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { CharacterComponent } from './character/character.component';


export const routes: Routes = [
    {
        path: '', redirectTo: '/characters', pathMatch: 'full'
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'characters', component: CharactersComponent
    },
    { 
        path: 'character/:id', component: CharacterComponent 
    },
    {
        path: 'randomcharacters', component: RandomCharactersComponent
    },
    { 
        path: 'search/:term', component: SearchComponent 
    },
    { 
        path: 'not-found', component: ErrorComponent 
    },
    { path: '**', redirectTo: '/not-found' },
    
];

