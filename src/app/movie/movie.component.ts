import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, JsonPipe } from '@angular/common';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe,JsonPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movie: any;

  constructor(private route: ActivatedRoute,private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.movieService.getMovieById(characterId).subscribe(
        (character: any) => {
          this.movie = character;
        },
        error => {
          console.error('Error loading character:', error);
        }
      );
    });
  }

}
