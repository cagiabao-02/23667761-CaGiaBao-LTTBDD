export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`${this.name}: $${this.price}`);
    }

}

const products: Product[] = [
    new Product("Mouse", 50),
    new Product("Keyboard", 130),
    new Product("Laptop", 1000)
];

const expensiveProducts = products.filter(product => product.price > 100);
console.log("Products với giá lớn hơn 100:");
expensiveProducts.forEach(product => {product.displayInfo();});