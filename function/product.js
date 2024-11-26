class Product {
    name;number;price;

    constructor(name, number, price) {
        this.name = name;
        this.number = number;
        this.price = price;
    }

    getAmount(){
        return this.number*this.price;
    }
}
