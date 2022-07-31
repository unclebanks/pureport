import { Player } from "../classes/Player"
import { Pokemon } from "../classes/Pokemon";

export const Utils = {

    createSave() {
        let tempPlayer = new Player();
        tempPlayer.addPoke(new Pokemon("Squirtle"));
        localStorage.setItem("purePort", JSON.stringify(tempPlayer));
        window.location.reload();
    },
    loadPlayer(sF) {
        let tempPlayer = new Player();
        tempPlayer.loadSave(sF);
        return tempPlayer;
    }
}