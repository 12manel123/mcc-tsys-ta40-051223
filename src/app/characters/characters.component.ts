import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.characters = data.results.slice(0, 18);//Limit of characters max 18 characters
    });
  }
  showCharacterInfo(character: any) {//Show the character with alert message
    alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`);
  }
}
