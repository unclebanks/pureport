import { POKEDEX } from "../data/Database";
import { EXP_TABLE } from "../data/ExpTable";
import { Utils } from "../modules/Utils";

// Pokemon Class needs to be rewritten to intialize values from the POKEDEX then get values from the statValue thingy
export class Pokemon {


    constructor(pokeModal, level = 5, shiny = false, prestigeLevel=0, initialEXP = null, appliedVitamins = {}) {
        this.poke = Utils.cloneJsonObject(pokeModal);
        this.expTable = EXP_TABLE[this.getGrowthRate()];
        this.exp = (level && this.expTable[level - 1]) || initialEXP;
        this.isShiny = (shiny === true);
        this.caughtAt = Date.now();
        //this.level = level;
        this.prestigeLevel = prestigeLevel;
        this.appliedVitamins = appliedVitamins;
        this.hp = this.maxHP();
    };
    currentLevel() {
        return this.expTable.filter((xp_requirement) => xp_requirement <= this.exp).length;
    };
    statValue(statName) {
        let raw = this.poke.poke? Number(this.poke.poke.stats[statName]): Number(this.poke.stats[statName]);
        raw += this.getAppliedVitamins(statName);
        let calculated = statName !== 'hp'
            ? ((raw * 100 + 50) * this.currentLevel()) / 150
            : ((raw * this.currentLevel()) / 40);
        if (statName !== 'speed' && statName !== 'hp') {
            calculated *= Math.pow(1.25, this.prestigeLevel);
        }
        if (statName === 'hp') {
            calculated *= 3;
        }
        return Math.floor(calculated);
    };
    pokemonPokedexInfo() { return POKEDEX[Utils.getPokeIdByName(this.name)]; };
    setHp(newHp) { this.hp = newHp; };
    getHp() { return this.hp; };
    maxHP() { return this.statValue('hp'); };
    attack() { return this.statValue('attack'); };
    defense() { return this.statValue('defense'); };
    spAttack() { return this.statValue('sp atk'); };
    spDefense() { return this.statValue('sp def'); };
    speed() { return this.statValue('speed'); };
    avgAttack() { return (this.attack() + this.spAttack()) / 2; };
    avgDefense() { return (this.defense() + this.spDefense()) / 2; };
    getGrowthRate() {
        let growthRate;
        if(this.poke.poke) {
            growthRate = this.poke.poke.stats['growth rate'];
        } else { growthRate = this.poke.stats['growth rate']; }
        return growthRate;
    }
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