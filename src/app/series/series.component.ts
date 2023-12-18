import { Component } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: any[] = [];

  constructor(private movieService: SerieService, private router: Router) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  loadSeries() {
    console.log("test");
    this.movieService.getSeries().subscribe((data: any) => {
      this.series = data.results;
    });
  }

  showSerie(movie: any) {
    const characterId = movie.id;
    this.router.navigate(['/serie', characterId]);
  }
}
