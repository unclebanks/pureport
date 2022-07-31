import React from "react";

export class Player {

    pokedexHighestID = 0;
    activePokeID = 0;
    lastHeal = Date.now();
    pokemon = [];
    pcPokemon = [];
    currentBoostedRoamer = {
        region: 'Kanto',
        route: 'Route 1',
        pokemon: 'Raikou',
        start: 0,
        length: 5 * 60 * 1000,
        expired: false,
    };
    selectedBall = 'pokeball';
    ballsAmount = {
        pokeball: 20,
        greatball: 0,
        ultraball: 0,
        masterball: 0,
    };
    unlocked = {};
    secretCodes = {};
    evoStones = {};
    currencyAmount = {
        pokecoins: 1000,
        catchcoins: 0,
        battlecoins: 0,
        gametokens: 100,
    };
    settings = {
        currentRegionId: 'Kanto',
        currentRouteId: 'Route 1',
        listView: 'pokeDex',
        theme: 'dark',
        autoSort: true,
        dexView: 'all',
        dexVersion: 194, // check if users dex is out of date
        spriteChoice: 'back',
        catching: false,
    };
    badges = {};
    wins = {};
    events = {};
    checksum(s) {
        let chk = 0x12345679;
        const len = s.length;
        for (let i = 0; i < len; i++) {
            chk += (s.charCodeAt(i) * (i + 1));
        }
        // eslint-disable-next-line no-bitwise
        return (chk & 0xffffffff).toString(16);
    };
    addPoke(poke) {
        if(this.pokemon.length > 5) {
            this.pcPokemon.push(poke);
        } else { this.pokemon.push(poke); }
    };
    loadSave(sF) {
        this.pokedexHighestID = sF.pokedexHighestID;
        this.activePokeID = sF.activePokeID;
        this.lastHeal = sF.lastHeal;
        this.pokemon = sF.pokemon;
        this.pcPokemon = sF.pcPokemon;
        this.currentBoostedRoamer = sF.currentBoostedRoamer;
        this.selectedBall = sF.selectedBall;
        this.ballsAmount = sF.ballsAmount;
        this.unlocked = sF.unlocked;
        this.secretCodes = sF.secretCodes;
        this.evoStones = sF.evoStones;
        this.currencyAmount = sF.currencyAmount;
        this.settings = sF.settings;
        this.badges = sF.badges;
        this.wins = sF.wins;
        this.events = sF.events;
    };
    changeRoute(newRoute) {
        this.settings.currentRouteId = newRoute;
    };
    changeRegion(newRegion, newRoute) {
        this.settings.currentRegionId = newRegion;
        this.settings.currentRouteId = newRoute;
    };
}