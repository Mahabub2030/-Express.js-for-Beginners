import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../config/mongoDB";

const todosRouter = express.Router()

const filePath = path.join(__dirname,"../../db/todo.json")

todosRouter.get("/", (req: Request, res:Response) => {
    const data = fs.readFileSync(filePath,{encoding:"utf-8"})
})

todosRouter.post("/creat-todo", async (req: Request, res: Response) => {

  const db = await client.db("todosDB");
  const collection =  await db.collection("todos")
 await collection.insertOne({
    title: "Mogodb",
    discription: "mogoDB",
    priority: "High",
    isCompleted: false,
 });
  
  const cursor = collection.find({})
  const todos =  await collection.toArray()
  res.json(todos)



  const { title, body } = req.body;
  console.log(title, body);
  res.send("Hello World");
});

