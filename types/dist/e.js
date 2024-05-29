"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
;
function doSomething(keypressed) {
    if (keypressed == Direction.up) {
        console.log("going up");
    }
    if (keypressed == Direction.down) {
        console.log("going down");
    }
    if (keypressed == Direction.right) {
        console.log("going right");
    }
    if (keypressed == Direction.left) {
        console.log("going left");
    }
}
doSomething(Direction.up);
doSomething(Direction.down);
doSomething(Direction.right);
doSomething(Direction.left);
console.log("all done");
