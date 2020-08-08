var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

var sprite = document.getElementById("sprite");

var FPS = 60;
var dt = 0;
var lastFrameTimeStamp = new Date().getTime();

var twoPlayer = false;
var player1,
    player2;

var sec = Math.floor(Date.now()/1000);
var currentSecond,
    frameCount;

//delta time get
setInterval(function () {
    dt = (new Date().getTime() - lastFrameTimeStamp) / 1000;
    lastFrameTimeStamp = new Date().getTime();
}, 1000 / FPS);


//setup function
function setup() {
    box = new Box(100, 100, 70, 70);
    box.draw();
    player1 = new Player(0, 0, mario);
    player1.draw();
}

function reset() {
    window.location.reload();
    player1.x = 0;
    player1.y = 0;
    velocity = 0;
}

function twoPlayers() {
    twoPlayer = true;
    player1.x = 0;
    player1.y = 0;
    player2 = new Player(50, 0, luigi);
    player2.draw();
    player2.x = 50;
    player2.y = 0;
    velocity = 0;
}

function singlePlayer() {
    twoPlayers = false;
    window.location.reload();
}

setup();

//frame
function frame() {
    controls();
    
    ctx.clearRect(0, 0, 123123, 123123);
    ctx2.clearRect(0, 0, 123123, 123123);
    player1.draw();
    player1.update();
    if(twoPlayer) {
        player2.draw();
        player2.update();
    }

    //debug canvas
    ctx2.fillStyle = "#ff0000";
    ctx2.fillText("FPS: " + dt*1000, 10, 20);

    ctx2.fillText("Player1 pos: " + Number(player1.x).toFixed(2) + ", " + Number(player1.y).toFixed(2), 10, 30);
    ctx2.fillText("hitbox test: " + player1.hitbox[2] > box.hitbox[3], 10, 40);
    ctx2.fillText("Player1 hitbox l: " + Number(player1.hitbox[0]).toFixed(2), 10, 50);
    ctx2.fillText("Player1 hitbox r: " + Number(player1.hitbox[1]).toFixed(2), 10, 60);
    ctx2.fillText("Player1 hitbox t: " + Number(player1.hitbox[2]).toFixed(2), 10, 70);
    ctx2.fillText("Player1 hitbox b: " + Number(player1.hitbox[3]).toFixed(2), 10, 80);
    ctx2.fillText("box hitbox: " + box.hitbox, 10, 90);


    box.draw();

    sqrCollision(player1, box);
    
    if(box.collision){
        console.exception('colision');
    }
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);