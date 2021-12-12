const MOVES = {
    w: [0, -25],
    a: [-25, 0],
    d: [25, 0], 
    s: [0, 25]
}


class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
        this.start - this.start.bind(this);
    }

    start() {
        this.bindKeyHandlers();
        this.animate();
    }
    
    animate() {
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }

    bindKeyHandlers() {
        const player = this.player;
        Object.keys(MOVES).forEach(function (ele) {
            const input = MOVES[ele];
            key(ele, function () { 
                player.move(input); 
            });
        })
    };

}

export default GameView;