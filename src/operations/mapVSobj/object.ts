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
    console.time('readObject');
    for(let i = 0; i <= count; i++){
        result += object[i];
    }
    console.timeEnd('readObject');
    
    console.log(result);
}