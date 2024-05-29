"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
;
class Emp {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
exports.Emp = Emp;
const e = new Emp("yash", 21);
console.log(e.name);
console.log(e.greet("hii there yash"));
