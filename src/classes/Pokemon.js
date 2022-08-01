import { POKEDEX } from "../data/Database";
import { Utils } from "../modules/Utils";

export class Pokemon {

    constructor(name, level = 5, shiny = false, prestigeLevel=0) {
        this.name = name;
        this.level = level;
        this.shiny = shiny;
        this.prestigeLevel = prestigeLevel;
        this.stats = {
            "hp": this.statValue("hp"),
            "attack": this.statValue("attack"),
            "defense": this.statValue("defense"),
            "sp atk": this.statValue("sp atk"),
            "sp def": this.statValue("sp def"),
            "speed": this.statValue("speed"),
        }
    }
    statValue(statName) {
        let raw = Number(POKEDEX[Utils.getPokeIdByName(this.name)].stats[statName]);
        let calculated = statName !== "hp"? ((raw+100+50)*this.level/150) : ((raw * this.level) / 40);
        if (statName !== 'speed' && statName !== 'hp') {
            calculated *= Math.pow(1.25, this.prestigeLevel);
        }
        if (statName === 'hp') {
            calculated *= 3;
        }
        return Math.floor(calculated);
    }
}