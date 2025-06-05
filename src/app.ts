import express, { Request, Response } from "express"
import fs from "fs"
import path from "path";
const app = express();

app.use(express.json())

const filePath = path.join(__dirname,"../db/todo.json")


app.get("/", (req: Request, res: Response) => {
    // console.log()

  res.send("welcom to todos app");
});
app.get("/todos", (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath,{encoding:"utf-8"})
    
//  console.log(data)

  res.json(data);
});
app.post("/todos/creat-todo", (req: Request, res: Response) => {
    const {title,body }= req.body;
    console.log(title,body)
  res.send("Hello World!");
});


export default app;

/**
 * server --> server handiling like -stating ,closing 
 * app file --> will be crud handling 
 */