// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

let nums = [-1,2,1,-4]
let target = 1
function threeSumClosest(nums, target) {
nums.sort((a,b) => a - b);
let closestSum = Infinity;

for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1

    while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right]
        
        if (currentSum === target) {
           return target; 
        }

        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
            closestSum = currentSum;
        }

        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    }
    return closestSum;
}

console.log(threeSumClosest(nums, target));