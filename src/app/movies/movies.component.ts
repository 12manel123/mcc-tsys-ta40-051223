import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    console.log("test");
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  showCharacter(movie: any) {
    const characterId = movie.id;
    this.router.navigate(['/movie', characterId]);
  }
}
