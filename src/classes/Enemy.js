import { Pokemon } from "./Pokemon";

export class Enemy {
    constructor(starter) {
        this.active = starter;
    }
    combatLoop = "";
    generator = (poke,level,prestigeLevel) => new Pokemon(poke,level,Math.random()< (1/4096));
    enemyPokemonTeam = (pokemonList) => {
        const selected = 0;
    }
}