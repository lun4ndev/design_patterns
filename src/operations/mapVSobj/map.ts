export function TestMap(){
    const map = new Map();
    const count = 10_000_000;
    
    console.time('addIndexToMap');
    for(let i = 0; i <= count; i++){
        map.set(i, i);
    }
    console.timeEnd('addIndexToMap');
    
    /*--------------------------------------------*/
    let result = 0;
    console.time('readMap');
    for(let i = 0; i <= count; i++){
        result += map.get(i);
    }
    console.timeEnd('readMap');
    
    console.log(result);
}