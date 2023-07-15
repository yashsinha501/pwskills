// Question 6**

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// **Example 1:**

// **Input:** nums = [4,3,2,7,8,2,3,1]

// **Output:**

// [2,3]

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

function findDuplicates(nums) {
    const result = [];

    for (const num of nums) {
        const absNum = Math.abs(num);
        if (nums[absNum - 1] < 0) {
            result.push(absNum);
        }
        nums[absNum - 1] *= -1;
    }

    return result;
}

console.log(findDuplicates(nums));  