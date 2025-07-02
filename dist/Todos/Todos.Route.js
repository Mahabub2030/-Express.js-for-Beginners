"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongoDB_1 = require("../config/mongoDB");
const todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
});
todosRouter.post("/creat-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoDB_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    const todos = yield collection.insertOne({
        title: "Mogodb",
        discription: "mogoDB",
        priority: "High",
        isCompleted: false,
    });
    // const todos = collection.find({})
    res.json(todos);
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello World");
}));
