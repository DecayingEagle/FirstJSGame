var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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
    //FPS
    if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
    else { frameCount++; }
    ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    controls1();
    controls2();
    player1.draw();
    player1.update();
    if(twoPlayer) {
        player2.draw();
        player2.update();
    }
    console.log("player1:");
    console.log(player1.x + "," + player1.y);
    console.log(player1.vector);
    console.log(player1.direction);
    if(twoPlayer) {
        console.log("player2:");
        console.log(player2.x + "," + player2.y);
        console.log(player2.vector);
        console.log(player2.direction);
    }
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);