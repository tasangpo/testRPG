class Tree {
    constructor(options) {
        this.pos = options.pos;
        this.width = 25;
        this.height = 50;
        this.img = new Image();
        this.img.src = "src/images/tree.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1], this.width, this.height)
    }

}

export default Tree;