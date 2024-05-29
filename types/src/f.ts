function getfirstelement<T>(arr : T[]){
    return arr[0];
}

interface user {
    name : string,
    age : number
}

const a =  getfirstelement<user>([{name : "yash",  age : 20}]);
const b =  getfirstelement<number>([585]);
const c =  getfirstelement<user>([{name : "hello",age : 21}]);
console.log(a);
console.log(b);
console.log(c);