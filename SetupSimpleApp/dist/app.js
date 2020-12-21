"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
let ptoclient = getProduct();
console.log(ptoclient);
app.get('/product', (req, res) => {
    res.send(ptoclient);
});
function getProduct() {
    let p = new product_1.Product();
    p.Id = "p1";
    p.Price = 400;
    p.Title = "Bat";
    return p;
}
app.listen(port, () => {
    console.info(`Ready on port ${port}`);
});
// app.listen(port,(err: any) => void{
//     if(err) {
//         return console.log(err);
//     }
//     return console.log('server is running on port :' + port);
//});
//# sourceMappingURL=app.js.map