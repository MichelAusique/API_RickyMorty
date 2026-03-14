import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  loading = false;
  errorMessage = '';

  nameFilter = '';
  statusFilter = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.errorMessage = '';

    this.characterService.getCharacters(this.nameFilter.trim(), this.statusFilter).subscribe({
      next: (response) => {
        this.characters = response.results ?? [];
        this.loading = false;
      },
      error: () => {
        this.characters = [];
        this.errorMessage = 'No se encontraron personajes.';
        this.loading = false;
      },
    });
  }

  onSearch(): void {
    this.loadCharacters();
  }

  onStatusChange(): void {
    this.loadCharacters();
  }
}
