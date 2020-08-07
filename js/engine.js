var acceleration,
    terminalVel,
    velocity = 0;

var gravity = 1;

/*var frameCollision = function () {
    if(player.x <= 0 && player.vx > 0) {
        player.vx -=
    }
}*/

//global function for all position updates
function updatePos(force, impulse, mass, terminalVel) {
    acceleration = force / mass + gravity;
    velocity += impulse / mass + acceleration * dt;
    if(terminalVel < velocity && terminalVel != null) {
        velocity = terminalVel;
    }
    console.log("vel:" + velocity);
    return velocity * dt;
}

function lvlRead(level) {
    
}