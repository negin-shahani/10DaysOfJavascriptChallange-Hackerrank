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
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    //"^" Matches beginning of input.
    //The character set [aeiou] will match any one character from the set {a, e, i, o, u}.
    // ".*" stipulates that the captured character must followed by zero or more occurrences of any character. explanation: You know that "."= The period matches any single character, except line terminators. and a*= Matches the preceding item a, 0 or more times.
    //"\1" is a backreference to the first capture group in our expression
    //"$" Matches end of input. ensures that matched item is at end of the sequence
    let re = new RegExp(/^([aeiou]).*\1$/);
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}
