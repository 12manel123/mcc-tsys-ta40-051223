import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private urlMovies = "https://api.themoviedb.org/3/movie/now_playing?api_key=43a4c6167d54ac61a26cd67250977818";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]>  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/now_playing?api_key=43a4c6167d54ac61a26cd67250977818");
  }


  getMovieById(movieId: number): Observable<any> {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=43a4c6167d54ac61a26cd67250977818");
  }
}
