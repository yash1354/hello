interface User {
    firstname : string,
    lastname : string,
    age : number
};
function isLegal(user : User) {
        if (user.age > 18) {
            return true;
        } else {
            return false
        }
    }
    
console.log(isLegal({
    firstname :"yash",
    lastname : "mittal",
    age : 21
}));