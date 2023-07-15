// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const quadruplets = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
  
        let left = j + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--;
            }
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return quadruplets;
  }

  const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const result = fourSum(nums, target);
console.log(result);
