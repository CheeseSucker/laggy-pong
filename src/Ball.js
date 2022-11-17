export class Ball {
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     */
    constructor(x = 0, y = 0, radius = 0.1) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = [0.3, -0.2];
    }

    /**
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const cw = context.canvas.width;
        const ch = context.canvas.height;

        const { x, y, radius } = this;

        context.beginPath();
        context.arc(x * cw, y * ch, radius * cw, 0, 2 * Math.PI, false);
        context.fillStyle = "rgba(255, 50, 255, 0.8)";
        context.fill();
    }
}
