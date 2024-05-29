interface person {
    name : string,
    age : number,
    greet(phrase : string): void
};

export class Emp implements person{
    name : string;
    age : number;

    constructor(n:string ,a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Emp("yash",21);
console.log(e.name);
console.log(e.greet("hii there yash"));