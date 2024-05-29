enum Direction {
    up,
    down,
    right,
    left
};

function doSomething(keypressed : Direction){
    if(keypressed == Direction.up){
        console.log("going up");
    }
    if(keypressed == Direction.down){
        console.log("going down");
    }
    if(keypressed == Direction.right){
        console.log("going right");
    }
    if(keypressed == Direction.left){
        console.log("going left");
    }
}

doSomething(Direction.up);
doSomething(Direction.down);
doSomething(Direction.right);
doSomething(Direction.left);
console.log("all done");