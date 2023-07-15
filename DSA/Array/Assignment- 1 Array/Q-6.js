// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// **Example 1:**
// Input: nums = [1,2,3,1]
// Output: true

const nums = [1, 2, 3, 1];
let count = 0;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            count++;
            break;
        }
    }
}

if (count > 0) {
    console.log(true);
} else {
    console.log(false);
}