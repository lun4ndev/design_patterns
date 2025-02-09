export function TestArray(){
    const arr: number[] = [];
    const count = 10_000_000;
    
    console.time('addIndexToArray');
    for(let i = 0; i <= count; i++){
        arr.push(i)
    }
    console.timeEnd('addIndexToArray');
    
    /*--------------------------------------------*/
    let result = 0;
    console.time('readArray');
    for(let i = 0; i <= count; i++){
        result += arr[i];
    }
    console.timeEnd('readArray');
    
    console.log(result);
}