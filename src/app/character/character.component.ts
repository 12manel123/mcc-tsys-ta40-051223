import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickmortyService } from '../services/rickmorty.service';
import { DatePipe, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-character',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  character: any;
  constructor(private route: ActivatedRoute,private rickmortyService: RickmortyService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.rickmortyService.getCharacterById(characterId).subscribe(
        (character: any) => {
          this.character = character;
        },
        error => {
          console.error('Error loading character:', error);
        }
      );
    });
  }
}
