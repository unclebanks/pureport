export class Battle {
    constructor(playerActive) {
        this.playerActive = playerActive;
    }
    paused = false;
    type = "";
    enemyPokemonIndex = 0;
    enemyArray = [];
    enemyActive = {};
    setEnemyArray(enemyArray) {
        this.enemyArray = enemyArray;
    };
    setEnemyActive() {
        this.enemyActive = this.enemyArray[this.enemyPokemonIndex];
    }
}