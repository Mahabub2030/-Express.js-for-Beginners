import express, { Request, Response } from "express"
import fs from "fs"
import path from "path";
const app = express();

app.use(express.json())

const todosRouter = express.Router()
const userRouter = express.Router()

app.use("/todos", todosRouter)
app.use("/users", userRouter)



app.get("/", (req: Request, res: Response) => {
    // console.log()

  res.send("welcom to todos app !!!");
});



export default app;

/**
 * server --> server handiling like -stating ,closing 
 * app file --> will be crud handling  
 */