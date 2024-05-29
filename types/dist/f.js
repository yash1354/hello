"use strict";
function getfirstelement(arr) {
    return arr[0];
}
const a = getfirstelement([{ name: "yash", age: 20 }]);
const b = getfirstelement([585]);
const c = getfirstelement([{ name: "hello", age: 21 }]);
console.log(a);
console.log(b);
console.log(c);
