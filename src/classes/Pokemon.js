import { POKEDEX } from "../data/Database";

export class Pokemon {

    constructor(name, level = 5) {
        this.name = name;
        this.level = level;
    }
}