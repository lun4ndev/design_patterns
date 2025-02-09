export function TestObject(){
    
    const object: Record<number, number> = {};
    const count = 10_000_000;
    
    console.time('addIndexToObject');
    for(let i = 0; i <= count; i++){
        object[i] = i;
    }
    console.timeEnd('addIndexToObject');
    
    /*--------------------------------------------*/
    let result = 0;

    //Быстрее
    /*
    console.time('readObject');
    for(let i = 0; i <= count; i++){
        result += object[i];
    }
    console.timeEnd('readObject');
    */

    //Медленее
    console.time('readObject');
    for(let i of Object.values(object)){
        result += Number(i);
    }
    console.timeEnd('readObject');
    
    console.log(result);
}