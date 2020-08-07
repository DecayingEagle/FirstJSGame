var playerSprite;

class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.w = 16;
        this.h = 32;
        this.mass = 10;
        this.terminalVel = 30;
        this.sprite = sprite;
        this.vector = [0, 0]

        this.frame = [16, 32, 48];
        this.curFrame = 0;
        this.frameCount = 0;
        this.isJumping = false

        //offset for sprites if direction is left/right
        this.dirOffset = 0;

        this.isWalking = false;
        this.isDucking = false;
        this.direction = 0;

        this.draw = function () {
            this.frameCount++;
            ctx.clearRect(0, 0, 999999, 9999999999);
            if (this.direction == 1) {
                this.dirOffset = 32;
            } else {
                this.dirOffset = 0;
            }

            if(this.isWalking) {
                ctx.drawImage(sprite, this.frame[this.curFrame], 0 + this.dirOffset, this.w, this.h, this.x, this.y, this.w, this.h);
            } else if(this.isJumping) {
                ctx.drawImage(sprite, 64, 0 + this.dirOffset, this.w, this.h, this.x, this.y, this.w, this.h);
            } else {
                ctx.drawImage(sprite, 0, 0 + this.dirOffset, this.w, this.h, this.x, this.y, this.w, this.h);
            }

            if (this.frameCount > 15) {
                this.curFrame++;
                this.frameCount = 0;
            }
            if (this.curFrame >= 2) {
                this.curFrame = 0;
            }
            if (sprite == null) {
                console.error("player sprite is null");
            }
        }
        this.update = function () {
            controls1();
            if (twoPlayer) {
                controls2();
            }
            this.move();
            //collison();
        }


        this.move = function () {
            if (this.vector[0] == 1) {
                this.y -= updatePos(2, 1000, this.mass);
                this.isJumping = true;
                this.isWalking = false;
            } else if (this.vector[1] == -1) {
                this.direction = 1;
                this.x -= updatePos(10, 1, this.mass);
                this.isWalking = true;
            } else if (this.vector[1] == 1) {
                this.direction = 0;
                this.x += updatePos(10, 1, this.mass);
                this.isWalking = true;
            } else if (this.vector[0] == -1) {
                this.isDucking = true;
            } else {
                this.isDucking = false;
                this.isWalking = false;
                this.isJumping = false;
            }
            this.y += updatePos(1, 1, this.mass, 30);

        }
    }
    method() {}
}