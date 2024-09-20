export default class ProductModel {

    constructor (
        id,
        name,
        desc,
        imageUrl,
        category,
        price,
        sizes
    ) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }

    static add(product) {
        product.id = products.length + 1;
        products.push(product);
        return product;
    }

    static GetAll() {
        return products;
    }

    static get(id) {
        const product = products.find(
            (i) => i.id == id
        );
        return product;
    }
}

var products = [
    new ProductModel (
        1,
        'product 1',
        'Description for Product 1',
        19.99,
        'https://m.media-',
        'category 2',
        ['M', 'XL']
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description for Product 2',
        29.99,
        ['M', 'XL', 'S']
    )
]