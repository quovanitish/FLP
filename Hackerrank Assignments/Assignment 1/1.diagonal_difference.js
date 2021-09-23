/*
https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

function diagonalDifference(arr) {
    
    let diagonal1 = 0, diagonal2 = 0;
    let n = arr.length;
     
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                
                if (i == j)
                    diagonal1 += arr[i][j];
     
                if (i == n - j - 1)
                    diagonal2 += arr[i][j];
            }
        }
     
        return Math.abs(diagonal1 - diagonal2);
}