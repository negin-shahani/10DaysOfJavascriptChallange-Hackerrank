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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    /* Explanation
     * \d means A single digit character
     * + Matches the preceding item (\d), for 1 or more times.
     * g is a flag means global match. (all the matches)
     */
    let re = new RegExp(/\d+/g);
    
    //another answer
    /*Explanation
    * [0-9] A single digit character
    * + Matches the preceding item [0-9], for 1 or more times. 
    * g is a flag means global match. (all the matches)
    */
    // let re = new RegExp(/[0-9]+/g)
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}
