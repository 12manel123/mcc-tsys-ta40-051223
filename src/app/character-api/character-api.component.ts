import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DatePipe, JsonPipe } from '@angular/common';
import { RickmortyApiService } from '../services/rickmorty-api.service';


@Component({
  selector: 'app-character-api',
  standalone: true,
  imports: [DatePipe,JsonPipe],
  templateUrl: './character-api.component.html',
  styleUrl: './character-api.component.css'
})
export class CharacterApiComponent {
  character: any;
  constructor(private route: ActivatedRoute,private rickmortyService: RickmortyApiService,private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterIdString = params.get('id');
      console.log(characterIdString);
  
      if (characterIdString !== null) {
        const characterId = parseInt(characterIdString, 10);
  
        if (!isNaN(characterId)) {
          this.loadCharacter(characterId);
        } else {
          console.error('ID de personaje no es un número válido');
        }
      } else {
        console.error('ID de personaje es nulo');
      }
    });
  }

  loadCharacter(characterId: number) {
    this.rickmortyService.getCharacterById(characterId).subscribe(
      (character: any) => {
        this.character = character;
      },
      error => {
        console.error('Error loading character:', error);
      }
    );
  }

  editCharacter() {
    const newCharacterName = prompt('Ingrese el nuevo nombre del personaje', this.character.name);

    if (newCharacterName !== null) {
      const updatedCharacter = { ...this.character, name: newCharacterName };
      this.rickmortyService.updateCharacter(this.character.id, updatedCharacter).subscribe(
        () => {
          this.character = updatedCharacter;
        },
        error => {
          console.error('Error updating character:', error);
        }
      );
    }
  }

  deleteCharacter() {
    if (confirm('¿Estás seguro de que deseas eliminar este personaje?')) {
      this.rickmortyService.deleteCharacter(this.character.id).subscribe(
        () => {
          this.router.navigate(['/charactersApi']);
        },
        error => {
          console.error('Error deleting character:', error);
        }
      );
    }
  }
}
