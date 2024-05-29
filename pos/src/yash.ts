import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
  })

  async function createUsersTable() {
    try{
    await client.connect()
    const result =await client.query(`
        INSERT INTO users(username,email,password) VALUES ('username','yash@gmail.com','2341');
    `)
    console.log("Insertion Sucess",result);
    }
    catch(err){
        console.error("Error in insertion",err);
    } finally{
        await client.end();
    }
}
createUsersTable();