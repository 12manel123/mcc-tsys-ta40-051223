import { Component } from '@angular/core';
import { RickmortyApiService } from '../services/rickmorty-api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newCharacter: any = {};

  constructor(private rickmortyApiService: RickmortyApiService, private router: Router) {}
  onSubmit() {
    this.rickmortyApiService.addCharacter(this.newCharacter).subscribe(response => {
      console.log('Character added successfully', response);
      this.newCharacter = {};
      this.router.navigate(['/charactersApi']);
    });
  }
}
