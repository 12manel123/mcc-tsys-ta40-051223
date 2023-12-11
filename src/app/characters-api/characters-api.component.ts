import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyApiService } from '../services/rickmorty-api.service';

@Component({
  selector: 'app-characters-api',
  standalone: true,
  imports: [],
  templateUrl: './characters-api.component.html',
  styleUrl: './characters-api.component.css'
})
export class CharactersApiComponent {
  characters: any[] = [];

  constructor(private rickmortyService: RickmortyApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickmortyService.getCharacters().subscribe((data: any) => {
      this.characters = data;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/characterApi', characterId]);
  }
}
