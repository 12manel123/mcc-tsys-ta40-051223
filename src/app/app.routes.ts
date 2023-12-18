import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './serie/serie.component';



export const routes: Routes = [
    {
        path: '', redirectTo: '/movies', pathMatch: 'full'
    },


    
    {
        path: 'movies', component: MoviesComponent
    },
    {
        path: 'movie/:id', component: MovieComponent
    },
    {
        path: 'series', component: SeriesComponent
    },
    {
        path: 'serie/:id', component: SerieComponent
    },
    { 
        path: 'not-found', component: ErrorComponent 
    },
    { 
        path: '**', redirectTo: '/not-found' 
    }
    
];

