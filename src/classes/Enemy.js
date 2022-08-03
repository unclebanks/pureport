export class Enemy {
    constructor(name, pokemon) {
        this.name = name;
        this.activePokemon = 0;
        this.pokemon = pokemon;
    };
    changeActivePokemon(newActive) {
        this.activePokemon = newActive;
    };
}