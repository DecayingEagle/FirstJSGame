var controls = function() {
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 40:
                //down
                player1.vector[0] = -1;
                break;
            case 38:
                //up
                player1.vector[0] = 1;
                break;
            case 39:
                //left
                player1.vector[1] = 1;
                break;
            case 37:
                //right
                player1.vector[1] = -1;
                break;

            //player2
            case 83:
                //down
                player2.vector[0] = -1;
                break;
            case 87:
                //up
                player2.vector[0] = 1;
                break;
            case 68:
                //left
                player2.vector[1] = 1;
                break;
            case 65:
                //right
                player2.vector[1] = -1;
                break;
        }
    }
    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 40:
                //down
                player1.vector[0] = 0;
                break;
            case 38:
                //up
                player1.vector[0] = 0;
                break;
            case 39:
                //left
                player1.vector[1] = 0;
                break;
            case 37:
                //right
                player1.vector[1] = 0;
                break;

            //player2
            case 83:
                //down
                player2.vector[0] = 0;
                break;
            case 87:
                //up
                player2.vector[0] = 0;
                break;
            case 68:
                //left
                player2.vector[1] = 0;
                break;
            case 65:
                //right
                player2.vector[1] = 0;
                break;
        }
    }
}