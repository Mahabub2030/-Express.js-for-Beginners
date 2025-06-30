import app from "./app";

let server;

const port = 8000;

const boostrap = async () => {
    server = app.listen(port, () => {
      console.log(`From ToDo app listening on port ${port}`);
    });
}

boostrap()