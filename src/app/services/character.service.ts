import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(name?: string, status?: string): Observable<CharacterResponse> {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name);
    }

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<CharacterResponse>(this.baseUrl, { params });
  }
}
