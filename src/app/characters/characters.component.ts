import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../services/rickmorty.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickmortyService: RickmortyService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickmortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results.slice(0, 18);
    });
  }

  showCharacter(character: any) {
    const characterId = character.id; // Asumiendo que hay una propiedad "id" en tu objeto character
    this.router.navigate(['/character', characterId]);
  }
}
