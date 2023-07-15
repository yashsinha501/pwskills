// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

const nums = [1, 3, 2, 2, 5, 2, 3, 7];

function findLHS(nums) {
    const numCount = new Map();
    for (const num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    let maxLen = 0;
    for (const key of numCount.keys()) {
        if (numCount.has(key + 1)) {
            const len = numCount.get(key) + numCount.get(key + 1);
            if (len > maxLen) {
                maxLen = len;
            }
        }
    }
    return maxLen;
}

console.log(findLHS(nums));
