class Player {
    constructor(options) {
        this.pos = [475, 275];
        this.width = 25;
        this.height = 25;
        this.game = options.game
        this.img = new Image();
        this.img.src = "src/images/char/front-char.png"
     }

     draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1], this.width, this.height)
     }

     move(input) {
         // out of bounds in x - direction
         this.pos[0] += input[0];
         if (this.pos[0] < 0) {
             this.pos[0] = 0;
         } else if (this.pos[0] > 975) {
             this.pos[0] = 975;
         }
         // out of bound in y - direction
         this.pos[1] += input[1];
         if (this.pos[1] < 0) {
             this.pos[1] = 0;
         } else if (this.pos[1] > 575) {
             this.pos[1] = 575;
         }
         // change image src based on move
         if (input[0] > 0) {
             this.img.src = "src/images/char/right-char.png";
         } else if (input[0] < 0) {
             this.img.src = "src/images/char/left-char.png";
         } else if (input[1] < 0) {
             this.img.src = "src/images/char/back-char.png";
         } else {
             this.img.src = "src/images/char/front-char.png";
         }
     }
}

export default Player;