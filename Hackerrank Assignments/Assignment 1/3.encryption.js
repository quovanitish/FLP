/*
https://www.hackerrank.com/challenges/encryption/problem
*/

function encryption(s) {
    
    let length = s.length;
    let skip = Math.floor(Math.sqrt(length));
    if(skip * skip != length)
        skip++;
    
    let str = "";    
    for(let i = 0; i < skip; i++) {
        let j = i;
        while(j < s.length) {
            str += s[j]; 
            j += skip;
        }
        str += " ";
    }
    
    return str;
}