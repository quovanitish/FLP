/*
https://www.hackerrank.com/challenges/js10-arrays/problem
*/

function getSecondLargest(nums) {
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largest) 
        {
            secondLargest = largest;
            largest = nums[i];
        }
    }
    
    return secondLargest;
}