import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})

export class RickmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  randomCharacterIds: number[] = [];

  constructor() {}
  http=inject(HttpClient);

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  generateRandomIds(many: number): number[] {
    const generatedIds: number[] = [];
    while (generatedIds.length < many) {
      const randomId = Math.floor(Math.random() * 826) + 1;
      if (!generatedIds.includes(randomId)) {
        generatedIds.push(randomId);
      }
    }
    return generatedIds;
  }

  loadRandomCharacters(ids: number[]): Observable<any[]> {
    const url = `https://rickandmortyapi.com/api/character/${ids.join(',')}`;
    return this.http.get<any[]>(url);
  }

  searchCharactersByName(name: string): Observable<any[]> {
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;
    return this.http.get<any[]>(searchUrl);
  }

  getCharacterInfo(character: any): string {
    return `Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`;
  }

  getCharacterById(characterId: number): Observable<any> {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    return this.http.get<any>(url);
  }
}
