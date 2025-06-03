import express, { Request, Response }  from "express";
const app = express();
const port = 3000;

app.get("/", (req :Request, res:Response) => {
  res.send("Hello World!");
});
app.get("/todos", (req, res) => {
  res.send("Hello World!");
});
app.put("/todos/creat/todos", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
