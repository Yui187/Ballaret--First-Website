"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use("/api/list", (req, res) => {
    res.json([
        {
            firstName: 'Steven',
            lastName: 'Ballaret'
        },
        {
            firstName: 'Remy',
            lastName: 'Sablon'
        },
        {
            firstName: 'Dave',
            lastName: 'Alivio'
        }
    ]);
});
app.use("/", (req, res) => {
    res.send("Hello welcome!");
});
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
