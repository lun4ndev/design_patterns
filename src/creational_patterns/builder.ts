interface Builder {
    partA(): void;
    partB(): void;
    partC(): void;
}

interface Product {
    parts: string[];
    listParts(tiker: number): void;
}

class ConcreteBuilder implements Builder {
    private product: Product;

    constructor(){
        this.product = new Product();
    }

    reset(){
        this.product = new Product();
    }

    partA(){
        this.product.parts.push('partA')
    }

    partB(){
        this.product.parts.push('partB')
    }

    partC(){
        this.product.parts.push('partC')
    }

    public getProducts(tiker: number): void {
        this.product.listParts(tiker);
    }
}

class Product implements Product {
    public parts: string[] = [];

    public listParts(tiker: number): void {
        console.log(tiker, ` PRODUCTS: parts -> ${this.parts.join(', ')}`)
    }
}

class Director {
    private builder: Builder;

    constructor(builder: Builder){
        this.builder = builder;
    }

    buildProduct(){
        this.builder.partA();
        this.builder.partB();
        this.builder.partC();
    }

    buildProduct2(){
        this.builder.partA();
        this.builder.partC();
    }
}

function init(director: Director, builder: ConcreteBuilder){
    builder.getProducts(1);
    director.buildProduct();
    builder.getProducts(2);
    builder.reset();
    builder.getProducts(3);
    director.buildProduct2();
    builder.getProducts(4);
    builder.reset();
    builder.getProducts(5);

    builder.partB();
    builder.partA();
    builder.getProducts(6);

}

const builder = new ConcreteBuilder();
const createDirector = new Director(builder);
init(createDirector, builder);