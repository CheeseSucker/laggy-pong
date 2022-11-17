import { Game } from "./Game.js";

class Controller {
    constructor(props) {
        this.game1 = new Game("canvas-player1");
        this.game2 = new Game("canvas-player2");
    }

    start() {
        document.addEventListener("keydown", (e) => this.onKeyDown(e))
        document.addEventListener("keyup", (e) => this.onKeyUp(e))

        this.game1.start();
        this.game2.start();

        this.lastNow = new Date().getTime();
        window.setInterval(() => this.tick(), 20);
    }

    /**
     * @param {KeyboardEvent} e
     */
    onKeyDown(e) {
        if (e.code === "KeyW") this.leftPaddleUp = true;
        if (e.code === "KeyS") this.leftPaddleDown = true;
        if (e.code === "ArrowUp") this.rightPaddleUp = true;
        if (e.code === "ArrowDown") this.rightPaddleDown = true;
        if (e.code === "Space") this.spaceDown = true;
    }

    /**
     * @param {KeyboardEvent} e
     */
    onKeyUp(e) {
        if (e.code === "KeyW") this.leftPaddleUp = false;
        if (e.code === "KeyS") this.leftPaddleDown = false;
        if (e.code === "ArrowUp") this.rightPaddleUp = false;
        if (e.code === "ArrowDown") this.rightPaddleDown = false;
        if (e.code === "Space") this.spaceDown = false;
    }

    tick(e) {
        const now = new Date().getTime();
        const elapsed = (now - this.lastNow) / 1000;
        this.lastNow = now;

        if (this.leftPaddleUp) {
            this.game1.leftPaddle.moveUp(elapsed);
            this.game2.leftPaddle.moveUp(elapsed);
        } else if (this.leftPaddleDown) {
            this.game1.leftPaddle.moveDown(elapsed);
            this.game2.leftPaddle.moveDown(elapsed);
        }

        if (this.rightPaddleUp) {
            this.game1.rightPaddle.moveUp(elapsed);
            this.game2.rightPaddle.moveUp(elapsed);
        } else if (this.rightPaddleDown) {
            this.game1.rightPaddle.moveDown(elapsed);
            this.game2.rightPaddle.moveDown(elapsed);
        }

        if (this.spaceDown) {
            this.game1.ball.x = this.game2.ball.x = 0.5;
            this.game1.ball.y = this.game2.ball.y = 0.5;
            this.game1.ball.velocity = this.game2.ball.velocity = [0.2, 0.3];
        }
    }
}

new Controller().start();
