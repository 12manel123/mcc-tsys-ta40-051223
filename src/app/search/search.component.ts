import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickmortyService } from '../services/rickmorty.service';

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
  selectedCharacter: any;
  constructor(private route: ActivatedRoute,private rickMortyService: RickmortyService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.search();
    });
  }

  search() {
    this.rickMortyService.searchCharactersByName(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }

  showCharacter(character: any) {
    const characterId = character.id;
    this.router.navigate(['/character', characterId]);
  }
}
