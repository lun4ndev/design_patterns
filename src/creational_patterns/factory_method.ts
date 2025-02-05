/*
    Factory method это порождающий паттерн проектирования, который определяет интерфейс для создания объекта, но позволяет подклассам изменять тип создаваемого объекта
*/

//Создадим интрефейс, который содержит несколько методов
interface IDocument {
    create: () => void;
    open: () => void;
    save: () => boolean;
}

//Создадим класс и имплементируем интерфейс. Интерфейс указывает на то, что методы create, open и save должны быть обязательно реализованы.
class WordDoc implements IDocument {
    create(){
        console.log('method create document')
    }

    open(){
        console.log('method open document')
    }

    save(){
        console.log('method save document')
        return true;
    }
}

//использование
function creatorDocument(creator: WordDoc){
    creator.create();
    creator.open();
}

const creatorIstance = new WordDoc();

creatorDocument(creatorIstance);