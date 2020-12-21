import {Product } from './product';
import express from 'express';

const app = express();
const port = 3000;

let ptoclient = getProduct();
console.log(ptoclient);

app.get('/product', (req,res) => {
    res.send(ptoclient);
})

function getProduct() {
    let p = new Product();
    p.Id = "p1";
    p.Price = 400;
    p.Title = "Bat"
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