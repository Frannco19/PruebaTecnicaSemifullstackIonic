import { Component } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokeapiserviceService, TypePokemon } from '../services/pokeapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'pokeapp';
  team$: Observable<Pokemon[]> | undefined;
  constructor(private pokeapiservice: PokeapiserviceService) {

  }

  ngOnInit() {
    this.generateRandomTeam();
  }

  generateRandomTeam() {
    const firePokemon$ = this.pokeapiservice.getFirePokemons();
    const waterPokemon$ = this.pokeapiservice.getWaterPokemons();
    const electricPokemon$ = this.pokeapiservice.getElectricPokemons();
    const rockPokemon$ = this.pokeapiservice.getRockPokemons();

    this.team$ = forkJoin({
      fire: firePokemon$,
      water: waterPokemon$,
      electric: electricPokemon$,
      rock: rockPokemon$,
    }).pipe(
      map((team) => {
        return [
          this.getRandomPokemon(team.fire),
          this.getRandomPokemon(team.water),
          this.getRandomPokemon(team.electric),
          this.getRandomPokemon(team.rock),
        ];
      })
    );
  }

  getRandomPokemon(pokemons: { id: number; name: string }[]): Pokemon {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return {
      id: pokemons[randomIndex].id,
      name: pokemons[randomIndex].name,
      sprite: '', 
      type: TypePokemon.Fire,    
    };
  }

}
