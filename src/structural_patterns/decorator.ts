interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost() {
        return 10;
    }

    description() {
        return "Простой кофе";
    }
}

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost() {
        return this.coffee.cost() + 2;
    }

    description() {
        return `${this.coffee.description()}, с молоком`;
    }
}

class SugarDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost() {
        return this.coffee.cost() + 1;
    }

    description() {
        return `${this.coffee.description()}, с сахаром`;
    }
}

// Использование
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee)
console.log(coffee.description()); // "Простой кофе, с молоком, с сахаром"
console.log(coffee.cost()); // 13