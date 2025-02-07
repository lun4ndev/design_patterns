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



//Пример №2

enum TypeFigure {
    square,
    arc
}

interface AbstractFigure {
    info(): void;
}

function AbstractFactory(type: TypeFigure){
    return type === TypeFigure.square ? square : arc;
}

function square(size: number){
    return new Square(size);
}

function arc(radius: number){
    return new Arc(radius);
}

class Arc implements AbstractFigure {
    private radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    info(){
        console.log(`Arc: radius = ${this.radius}`)
    }
}

class Square implements AbstractFigure {
    private width: number;
    private height: number;

    constructor(size: number){
        this.width = size;
        this.height = size;
    }

    info(){
        console.log(`Square: width = ${this.width}, height = ${this.height}, area: ${this.area()}`)
    }

    area(): number{
        return this.width * this.height;
    }
}

const createSquare = AbstractFactory(TypeFigure.square);
const squareFigure = createSquare(45);
squareFigure.info();

const createArc = AbstractFactory(TypeFigure.arc);
const squareArc= createArc(45);
squareArc.info();