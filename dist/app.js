"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    // console.log()
    res.send("welcom to todos app !!!");
});
app.get("/todos/:title", (req, res) => {
    console.log("from pamars ", req.params);
    console.log("from qurey ", req.query);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data)
    //  console.log(data)
    res.json(data);
});
app.post("/todos/creat-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello World");
});
exports.default = app;
/**
 * server --> server handiling like -stating ,closing
 * app file --> will be crud handling
 */ 
