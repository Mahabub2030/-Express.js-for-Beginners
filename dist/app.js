"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
app.use("/todos", todosRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
    // console.log()
    res.send("welcom to todos app !!!");
});
exports.default = app;
/**
 * server --> server handiling like -stating ,closing
 * app file --> will be crud handling
 */ 
