/*
https://www.hackerrank.com/challenges/migratory-birds/problem
*/
function migratoryBirds(arr) {
    let hashMap = new Map();
    
    for(let i = 0; i < arr.length; i++) {
        hashMap.set(arr[i], hashMap.get(arr[i]) == undefined ? 1 : hashMap.get(arr[i]) + 1);
    }

    let resultKey;
    let maxVal = Number.MIN_VALUE;
    for(const [key, value] of hashMap) {
        if(value > maxVal) {
            maxVal = value;
            resultKey = key;
        }
    }
    
    return resultKey;
}
