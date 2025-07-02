import app from "./app";
import { client } from "./config/mongoDB";

let server;
const port = 8000;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// console.log(uri)
const boostrap = async () => {
  await client.connect();
  console.log('conneted to db')

  server = app.listen(port, () => {
      console.log(`From ToDo app listening on port ${port}`);
    });
}

boostrap()