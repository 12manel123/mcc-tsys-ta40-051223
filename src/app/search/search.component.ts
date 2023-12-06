import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {//Obtains the search term
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.search();
    });
  }

  search() {//Search name in the API and return results
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${this.searchTerm}`;
    this.http.get(searchUrl).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }
  showCharacterInfo(character: any) {
    alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nType: ${character.type}\nGender: ${character.gender}`);
  }
}
