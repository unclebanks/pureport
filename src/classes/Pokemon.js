import { POKEDEX } from "../data/Database";
import { EXP_TABLE } from "../data/ExpTable";
import { Utils } from "../modules/Utils";

// Pokemon Class needs to be rewritten to intialize values from the POKEDEX then get values from the statValue thingy
export class Pokemon {


    constructor(pokeModal, level, shiny = false, prestigeLevel=0, appliedVitamins = {}) {
        this.name = pokeModal.name;
        this.id = pokeModal.id;
        this.baseStats = pokeModal.stats? pokeModal.stats: pokeModal.baseStats;
        this.baseExp = pokeModal.exp? pokeModal.exp: pokeModal.baseExp;
        this.expTable = EXP_TABLE[this.getGrowthRate()];
        this.exp = this.expTable[level - 1];
        this.level = this.currentLevel();
        this.computedStats = {
            hp: this.computeStats("hp"),
            atk: this.computeStats("attack"),
            def: this.computeStats("defense"),
            spAtk: this.computeStats("spAtk"),
            spDef: this.computeStats("spDef"),
            speed: this.computeStats("speed"),
        }
        this.isShiny = (shiny === true);
        this.caughtAt = Date.now();
        this.prestigeLevel = prestigeLevel;
        this.appliedVitamins = appliedVitamins;
        this.hp = this.maxHP();
    };
    currentLevel() {
        let i = 0;
        while(this.currentExp > this.expTable[i]) {
            console.log("higher than this level ===== "+i);
            i++;
        }
        return i + 2;
    };
    computeStats(statName) {
        let raw = this.baseStats[statName];
        // raw += this.appliedVitamins[statName];
        // ^^^ Vitamins to be implemented later
        let calculated;
        if(statName !== "hp") {
            calculated = (raw * 100 + 50 * this.currentLevel()) / 150
        } else { 
            calculated = (raw * this.currentLevel()) / 40
        };
        if(statName === "hp") {
            calculated *= 3;
        }
        return Math.floor(calculated);
    };
    pokemonPokedexInfo() { return POKEDEX[Utils.getPokeIdByName(this.name)]; };
    setHp(newHp) { this.hp = newHp; };
    getHp() { return this.hp; };
    maxHP() { return this.computeStats('hp'); };
    avgAttack() { return (this.computedStats["attack"] + this.computedStats["spAtk"]) / 2; };
    avgDefense() { return (this.computedStats["defense"] + this.computedStats["spDef"]) / 2; };
    getGrowthRate() { return this.baseStats["growthRate"]; };
    shiny() { return this.isShiny; };
    alive() { return this.getHp() > 0; };
    types() { return this.poke.stats.types; };
    pokeName() { return this.poke.poke.name; };
    catchRate() { return Number(this.poke.poke.stats['catch rate']); };
    giveExp(amount) { this.exp += amount; };
    baseExp() { return Number(this.poke.poke.exp); };
    currentExp() { return this.exp; };
    nextLevelExp() { return this.expTable[this.currentLevel()] || (this.currentExp() + 1); };
    thisLevelExp() { return this.expTable[this.currentLevel() - 1] || 10; };
    level() { return this.currentLevel(); };
    prestigeLevel() { return this.prestigeLevel; };
    getAppliedVitamins(stat) { return (this.appliedVitamins || {})[stat] || 0; };
    heal() { return this.setHp(this.maxHp()); };
    attackSpeed() {
        let speed = Math.floor(1000 / (500 + this.speed()) * 800);
        if(speed <= 300) {
            return 300;
        } else {
            return speed;
        }
    };
    takeDamage(enemyAttack) {
        const damageToTake = ((enemyAttack - this.avgDefense() / 10) > 0 &&
        Math.ceil((enemyAttack - this.avgDefense() / 10) * ((Math.random() + 0.1) * 2) / 100)) || 0;
        this.setHp(this.getHp() - damageToTake);
        return damageToTake;
    };
    canPrestige() { return this.level() >= 100; };
    tryPrestige() {
        if (this.canPrestige()) {
            this.exp = this.expTable[4];
            this.setHp(this.maxHp());
            this.prestigeLevel++;
        }
    };
    // canEvolve(player) {
    //     // pokemon Has Evolution
    //     const evos = EVOLUTIONS[this.pokeName()];
    //     if (evos !== undefined) {
    //         return evos.findIndex(evoRequirementMet(this, player)) > -1;
    //     }
    //     return false;
    // };
}