export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown' | 'Unknown';
  species: string;
  image: string;
}

export interface CharacterResponse {
  results: Character[];
}
