'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let newnNums = [...new Set(nums)]; //with this method I can delete the duplicates
    newnNums = newnNums.sort((a,b) => a-b); //sort method for numbers
    if(newnNums.length == 1){ //if we dont have atleast two numbers
        return newnNums[0];
    }
    return newnNums[newnNums.length-2];
}

