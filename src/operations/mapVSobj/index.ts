import { TestArray } from './array';
import { TestMap } from './map';
import { TestObject } from './object';
import { TestSet } from './set';

TestObject();
TestMap();
TestArray();
TestSet();

/*
    В моем случае показатели такие

    OBJECT {}
    addIndexToObject: 82мс - таймер закончился object.ts:9:12
    readObject: 9мс - таймер закончился object.ts:17:12
    50000005000000

    new Map()
    addIndexToMap: 1210мс - таймер закончился map.ts:9:12
    readMap: 314мс - таймер закончился map.ts:17:12
    50000005000000

    Array []
    addIndexToArray: 79мс - таймер закончился array.ts:9:12
    readArray: 8мс - таймер закончился array.ts:17:12
    50000005000000

    new Set()
    addIndexToSet: 943мс - таймер закончился set.ts:9:12
    readSet: 67мс - таймер закончился set.ts:17:12
    50000005000000

    Выиграет во всем объект Object {}. 
    Самый медленный на добавление данных, а также при чтение данных, это Map.
    Array на 2 месте, но! Он часто выигрывает на чтение данных у Object, но не существенно, ~1-2мс.
    Set() добавляет данные медленно, немного быстрее Map, при чтении он в разы быстрее Map в ~3-5 раз, но в разы медленнее Object и Array. 

    Но если сравнивать цикл for of, то на чтение Map выиграет у object. При добавлении Map упорядочивает данные, поэтому это и занимает время, зато при таком чтении выигрывает у Object.
*/