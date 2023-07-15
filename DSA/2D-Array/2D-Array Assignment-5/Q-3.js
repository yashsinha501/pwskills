// Question 3**

// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// **Input:** nums = [-4,-1,0,3,10]

// **Output:** [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].

// After sorting, it becomes [0,1,9,16,100].

const nums = [-4, -1, 0, 3, 10];

function sortedSquares(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const square = nums[i] * nums[i];
      result.push(square);
    }
  
    result.sort((a, b) => a - b);
  
    return result;
  }

  console.log(sortedSquares(nums));  