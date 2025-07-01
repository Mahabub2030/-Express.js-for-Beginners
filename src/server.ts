import app from "./app";

let server;
const port = 8000;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  // "mongodb+srv://TodosApp:h34tiiB7SVUOV5rF@cluster0.x9t7sgg.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
  "mongodb://TodosApp:h34tiiB7SVUOV5rF@ac-cgkxfia-shard-00-00.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-01.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-02.x9t7sgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-nszs70-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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