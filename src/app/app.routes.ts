import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { RandomCharactersComponent } from './random-characters/random-characters.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { CharacterComponent } from './character/character.component';
import { CharactersApiComponent } from './characters-api/characters-api.component';
import { CharacterApiComponent } from './character-api/character-api.component';


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
        path: 'charactersApi', component: CharactersApiComponent
    },
    { 
        path: 'characterApi/:id', component: CharacterApiComponent 
    },
    { 
        path: 'characters/:id', component: CharacterComponent 
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
    { 
        path: '**', redirectTo: '/not-found' 
    }
    
];

