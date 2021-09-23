/*
https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/
function compareTriplets(a, b) {
    
    let finalPoints = [0, 0];
    
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]) {
            finalPoints[0] += 1;
        }
        else if (a[i] < b[i]) {
            finalPoints[1] += 1;
        }
    }
    
    return finalPoints;
}