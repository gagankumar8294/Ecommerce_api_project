import ProductModel from "./product.model.js";

export default class ProductController {

    getAllProducts(req, res) {
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res) {
        const { name, price , sizes } = req.body;
        const newProduct = { 
            name, 
            price: parseFloat(price), 
            sizes: sizes.split(','),
            imageUrl: req.file.filename,
        };
console.log(req.body);
        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
        
        console.log("this is a product");
        res.status(200).send("Post request received");
    }

    rateProduct(req, res) {

    }

    getOneProduct(req, res) {
        
    }
}