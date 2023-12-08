import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../services/rickmorty.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-random-characters',
  standalone: true,
  imports: [],
  templateUrl: './random-characters.component.html',
  styleUrl: './random-characters.component.css'
})
export class RandomCharactersComponent implements OnInit {
  characters: any[] = [];
  count:number = 0;

  constructor(private rickmortyService: RickmortyService, private router: Router) {}

  ngOnInit(): void {
    const randomIds = this.rickmortyService.generateRandomIds(12);
    this.rickmortyService.loadRandomCharacters(randomIds).subscribe((data: any) => {
      this.characters = data;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id; // Asumiendo que hay una propiedad "id" en tu objeto character
    this.router.navigate(['/character', characterId]);
  }
}
