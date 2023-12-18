import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private urlMovies = "https://api.themoviedb.org/3/tv/popular?api_key=43a4c6167d54ac61a26cd67250977818";

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any[]>  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/tv/popular?api_key=43a4c6167d54ac61a26cd67250977818");
  }


  getSerieById(movieId: number): Observable<any> {
    return this.http.get<any[]>("https://api.themoviedb.org/3/tv/"+movieId+"?api_key=43a4c6167d54ac61a26cd67250977818");
  }
}
