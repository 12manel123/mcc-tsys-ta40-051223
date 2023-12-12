import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyApiService {
  private apiUrl = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCharacterById(characterId: number): Observable<any> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.get<any>(url);
  }
  
  updateCharacter(characterId: number, updatedCharacter: any): Observable<any> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.put<any>(url, updatedCharacter);
  }

  deleteCharacter(characterId: number): Observable<any> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.delete<any>(url);
  }
  addCharacter(newCharacter: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newCharacter);
  }
}
