// Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

function findMaxLength(nums) {
    const countMap = new Map();
    countMap.set(0, -1); // Initialize the count map with count = 0 at index -1
    let maxLength = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // Increment the count if nums[i] is 1, decrement if it's 0
        count += nums[i] === 1 ? 1 : -1;

        if (countMap.has(count)) {
            // If the count is already present in the map, update the maxLength
            maxLength = Math.max(maxLength, i - countMap.get(count));
        } else {
            // If the count is not in the map, add it with the current index
            countMap.set(count, i);
        }
    }

    return maxLength;
}

// Example usage
const nums = [0, 1];
const maxLength = findMaxLength(nums);
console.log(maxLength);  