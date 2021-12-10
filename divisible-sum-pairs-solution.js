'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, arr) {
    // Write your code here
    let count = 0;
    // o( n power 2)
    for( let i = 0; i < arr.length; i++ ){
        for( let j = i + 1; j < arr.length; j++){
            if( ( arr[i] + arr[j] ) % k == 0 ){
                count++;
            }
        }
    }
    //----------------------------------------------------
    //let's try o( n)
    // const hashMap = {}; 
    // for ( let index = 0; index < arr.length; index++){
    //     let mod = arr[index] % k;
    //     let complementery = ( k - mod === 0 ) ? 0 :  k - mod ;
        
    //     console.log( { mod, complementery});
        
    //     if( !hashMap.hasOwnProperty(mod)){
    //         hashMap[mod] = 1;
    //     }else{
    //         hashMap[mod] = hashMap[mod] + 1;
    //     }
        
    //     if( hashMap.hasOwnProperty(complementery) ){
    //         count = count + hashMap[complementery];
    //     } 
    // }
    // console.log( hashMap )
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}
