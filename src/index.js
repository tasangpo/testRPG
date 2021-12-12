import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');

    const game = new Game();
    const gameView = new GameView(game, ctx);
    
    gameView.start();
})