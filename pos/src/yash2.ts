import { Client } from "pg";

async function insertdata(username: string, email: string, password: string) {
const client = new Client ({
    connectionString : "postgresql://postgres:mysecretpassword@localhost/postgres"
});

try{
    await client.connect();
    const insertquery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
    const values =[username,email,password];
    const res =await client.query(insertquery,values);
    console.log("insertion successful",res);
}
catch(err){
    console.error("error in insertion",err);
}
finally{
    await client.end();
}
}
insertdata("yash","y@gmail.com","3214").catch(console.error);
