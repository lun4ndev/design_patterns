interface AbsctractFactory {
    productA(): AbstractProductA;
    productB(): AbstractProductB
}

interface AbstractProductA {
    someMethod(): string;
}

interface AbstractProductB {
    someMethod(): string;
    anotherFunc(collabarator: AbstractProductA): string;
}

class ConcreteFactory implements AbsctractFactory {
    public productA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public productB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteProductA1 implements AbstractProductA {
    public someMethod(): string {
        return 'The result of the product ConcreteProductA1.';
    }
}

class ConcreteProductB1 implements AbstractProductB {
    public someMethod(): string {
        return 'The result of the product ConcreteProductB1.';
    }

    public anotherFunc(productA: AbstractProductA): string {
        const product = productA.someMethod();
        return `The result of the product ConcreteProductB1. collabarator -> ${product}`;
    }
}

function initFactory(factory: AbsctractFactory){
    const productA = factory.productA();
    const productB = factory.productB();

    console.log(1, productA.someMethod());
    console.log(2, productB.someMethod());
    console.log(3, productB.anotherFunc(productA));
}

initFactory(new ConcreteFactory());