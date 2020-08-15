var acceleration,
    terminalVel,
    velocity = 0;

var gravity = 1;

//colision for rectangles
function rectCollision (obj, obj2) {
    if(obj.hitbox[2] > obj2.hitbox[3] || obj.hitbox[1] < obj2.hitbox[0] || obj.hitbox[3] < obj2.hitbox[2] || obj.hitbox[0] > obj2.hitbox[1]) {
        obj.collision = false;
        obj2.collision = false;
    } else {
        obj.collision = true;
        obj2.collision = true;
    }
}

//global function for all position updates
function updatePos(force, impulse, mass, terminalVel) {
    acceleration = force / mass + gravity;
    velocity += impulse / mass + acceleration * dt;
    if(terminalVel < velocity && terminalVel != null) {
        velocity = terminalVel;
    }
    return velocity * dt;
}