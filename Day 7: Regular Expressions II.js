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
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    /*Explanation:
    *"^" Matches beginning of input with (Mr|Mrs|Ms|Dr|Er)
    *\. then we should have a "."
    *[a-z|A-Z] then we can have upper and lower case alphabet
    *+ means it matches the preceding item [a-z|A-Z], 1 or more times.
    *$ Matches end of input.
    */
    let re = new RegExp(/^(Mr|Mrs|Ms|Dr|Er)\.[a-z|A-Z]+$/);
    
    //another answer
    /*Explanation:
    *"^" Matches beginning of input with (Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)
    *\s then we would have an space
    *? and the space should have the following rule
    *[a-z|A-Z] we can have upper and lower case alphabet
    *+ means it matches the preceding item [a-z|A-Z], 1 or more times.
    *$ Matches end of input.
    */
    // let re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/)
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}
