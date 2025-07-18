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
const app_1 = __importDefault(require("./app"));
const mongoDB_1 = require("./config/mongoDB");
let server;
const port = 8000;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// console.log(uri)
const boostrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoDB_1.client.connect();
    console.log('conneted to db');
    server = app_1.default.listen(port, () => {
        console.log(`From ToDo app listening on port ${port}`);
    });
});
boostrap();
