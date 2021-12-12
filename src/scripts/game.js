import Player from "./player";
import Tree from "./tree";

class Game {
    constructor() {
        this.players = [];
        this.trees = [];

        this.addTrees();
    }

    addPlayer() {
        const player = new Player( {game: this} )
        this.players.push(player);
        return player;
    }

    addTrees() {
        while (this.trees.length < 50) {
            const tree = new Tree( { pos: [ this.randomX(), this.randomY() ] } );
            this.trees.push(tree);
        }
        return this.trees;
    }

    randomX() {
        let posX = Math.floor(Math.random() * 100);
        while (posX > 40) {
            posX = Math.floor(Math.random() * 100);
        }
        return (posX * 25);
    }

    randomY() {
        let posY = Math.floor(Math.random() * 100);
        while (posY > 24) {
            posY = Math.floor(Math.random() * 100);
        }
        return (posY * 25);
    }

    draw(ctx) {   
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1000, 600)
        this.players[0].draw(ctx);
        this.trees.forEach(function(tree) {
            tree.draw(ctx);
        })
    }

}

export default Game;