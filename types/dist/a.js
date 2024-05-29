"use strict";
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal({
    firstname: "yash",
    lastname: "mittal",
    age: 21
}));
