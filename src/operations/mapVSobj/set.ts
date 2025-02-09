export function TestSet(){
    const set = new Set<number>();
    const count = 10_000_000;
    
    console.time('addIndexToSet');
    for(let i = 0; i <= count; i++){
        set.add(i);
    }
    console.timeEnd('addIndexToSet');
    
    /*--------------------------------------------*/
    let result = 0;
    console.time('readSet');
    for(let i of set){
        result += i;
    }
    console.timeEnd('readSet');
    
    console.log(result);
}