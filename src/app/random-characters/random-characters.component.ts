import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  randomCharacterIds: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateRandomIds();
    this.loadRandomCharacters();
  }

  generateRandomIds() {//Generate random character
    while (this.randomCharacterIds.length < 12) {
      const randomId = Math.floor(Math.random() * 826) + 1;
      if (!this.randomCharacterIds.includes(randomId)) {
        this.randomCharacterIds.push(randomId);
      }
    }
  }

  loadRandomCharacters() {//Load random characters
    const url = `https://rickandmortyapi.com/api/character/${this.randomCharacterIds.join(',')}`;
    this.http.get(url).subscribe((data: any) => {
      this.characters = data;
    });
  }
  showCharacterInfo(character: any) {
    alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`);
  }
}
