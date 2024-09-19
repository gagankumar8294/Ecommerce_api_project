
// 1. Import Express
import express from "express";
import bodyParser from "body-parser";
import ProductRouter from './src/features/product/product.routes.js';

// 2. Create Server
const server = express();

server.use(bodyParser.json());

server.use('/api/products', ProductRouter);

// 3. Default request handler
server.get("/", (req, res) => {
    res.send("Welcome to Ecommerce APIs");
})

// 4. Specify port.
server.listen(3200, () => {
    console.log('server is running at port http://localhost:3200');
});