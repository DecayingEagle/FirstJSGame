class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.collision = false;

        //0 - left 1 - right 2 - top 3 - bot
        this.hitbox = [this.x, this.x + this.w, this.y, this.y + this.h];

        this.draw = function () {
            if(this.collision) {
                ctx.fillStyle = 'red';
            } else {
               ctx.fillStyle = 'black'; 
            }
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
    method() {}
}

//lol