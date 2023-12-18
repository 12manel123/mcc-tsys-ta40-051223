import { Component } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  serie: any;

  constructor(private route: ActivatedRoute,private serieService: SerieService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.serieService.getSerieById(characterId).subscribe(
        (character: any) => {
          this.serie = character;
        },
        error => {
          console.error('Error loading character:', error);
        }
      );
    });
  }
}
