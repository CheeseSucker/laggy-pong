export class Paddle {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = 1.0;
    }

    /**
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const cw = context.canvas.width;
        const ch = context.canvas.height;

        const { x, y, width, height } = this;

        context.fillStyle = "rgba(100, 255, 200, 0.8)";
        context.fillRect((x - width / 2) * cw, (y - height / 2) * ch, width * cw, height * ch);
    }

    moveUp(time) {
        this.y -= this.speed * time;
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
        }
    }

    moveDown(time) {
        this.y += this.speed * time;
        if (this.y > 1 - this.height / 2) {
            this.y = 1 - this.height / 2;
        }
    }
}
