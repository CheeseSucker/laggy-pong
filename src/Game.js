import { Paddle } from "./Paddle.js";
import { Ball } from "./Ball.js";

export class Game {
    constructor(canvasId) {
        /** @type {HTMLCanvasElement} */
        this.canvas = document.getElementById(canvasId);
        /** @type {CanvasRenderingContext2D} */
        this.context = this.canvas.getContext("2d");

        this.leftPaddle = new Paddle(0.05, 0.5, 0.18, 0.025);
        this.rightPaddle = new Paddle(0.95, 0.5, 0.18, 0.025);
        this.ball = new Ball(0.5, 0.5, 0.02);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.leftPaddle.draw(this.context);
        this.rightPaddle.draw(this.context);
        this.ball.draw(this.context);

        window.requestAnimationFrame(this.draw.bind(this));
    }

    start() {
        this.lastNow = new Date().getTime();
        this.draw(0);
        window.setInterval(() => this.tick(), 20);
    }

    tick(e) {
        const now = new Date().getTime();
        const elapsed = (now - this.lastNow) / 1000;
        this.lastNow = now;

        this.ball.x += this.ball.velocity[0] * elapsed;
        this.ball.y += this.ball.velocity[1] * elapsed;
        if (this.ball.y - this.ball.radius / 2 < 0) {
            const overlap = this.ball.y - this.ball.radius / 2;
            this.ball.y = 0 - overlap;
            this.ball.velocity[1] *= -1;
        }
        if (this.ball.y + this.ball.radius / 2 > 1) {
            const overlap = this.ball.y + this.ball.radius / 2 - 1;
            this.ball.y = 1 - overlap;
            this.ball.velocity[1] *= -1;
        }
        if (this.ball.x - this.ball.radius / 2 < 0) {
            const overlap = this.ball.x - this.ball.radius / 2;
            this.ball.x = 0 - overlap;
            this.ball.velocity[0] *= -1;
        }
        if (this.ball.x + this.ball.radius / 2 > 1) {
            const overlap = this.ball.x + this.ball.radius / 2 - 1;
            this.ball.x = 1 - overlap;
            this.ball.velocity[0] *= -1;
        }
    }
}
