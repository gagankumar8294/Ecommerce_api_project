
// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express router.
const ProductRouter = express.Router();

const productController = new ProductController();
// All the paths to controller methods.
// localhost/api/products
ProductRouter.get("/", productController.getAllProducts);
ProductRouter.get('/:id', productController.getOneProduct);
ProductRouter.post("/", upload.single('imageUrl'), productController.addProduct);

export default ProductRouter;