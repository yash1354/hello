import { Client } from "pg";

async function allidone () {
    const client = new Client({
        connectionString : "postgresql://postgres:mysecretpassword@localhost/postgres"

    })

    try{
        await client.connect();
        const query1 ='SELECT * FROM users WHERE username="yash"';
        const query2 =`INSERT INTO users(username,email,password) VALUES ('u765','ya244@gmail.com','234155');`;
        const query3 ='SELECT * FROM users';
        // const res = await client.query(query2);
        const result = await client.query(query2);
        console.log(result);
} catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }

}

allidone();