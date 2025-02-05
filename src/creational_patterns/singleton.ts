/*
    Singleton Гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к нему.
*/

export class Singleton {
	private static instance: Singleton;

	//приватный конструктор, чтобы запретить создание эксземпляров
	private constructor(){}

	//метод для получения экземпляра Singleton
	public static getInstance(): Singleton {
		if(!Singleton.instance){
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	//тестовый метод
	method(): void{
		console.log("Вызван метод Singleton")
	}
}

/*SINGLETON*/
//Создание экземпляра класса
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

//Если сравнить 2 экземпляра, то они будут равны, потому что это один и тот же экземпляр
console.log(instance1 === instance2) //true
//Вызываем тестовый метод класса Singleton
instance1.method()

/*------------------------------------------------------------*/

/*
	Применение singleton патерна на практике.
	Например можно использовать для подключения к базе данных
*/
class DatabaseConnection {
    private static instance: DatabaseConnection;
    private constructor() {}

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        console.log(`Executing query: ${sql}`);
    }
}

const db = DatabaseConnection.getInstance();
db.query("SELECT * FROM users");