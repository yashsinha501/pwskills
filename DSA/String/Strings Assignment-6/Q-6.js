// Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4]

function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the changed array has an odd length, it can't be a doubled array
  }

  const original = [];
  const numCount = new Map();

  // Count the occurrence of each number in the changed array
  for (const num of changed) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  // Sort the unique numbers in ascending order
  const uniqueNums = Array.from(numCount.keys()).sort((a, b) => a - b);

  // Process each unique number
  for (const num of uniqueNums) {
    if (numCount.get(num) === 0) {
      continue; // Skip if the number is already used up
    }

    const doubleNum = num * 2;

    // Check if the double of the number exists in the changed array
    if (!numCount.has(doubleNum) || numCount.get(doubleNum) === 0) {
      return []; // If the double of the number is missing or already used up, it's not a doubled array
    }

    // Append the original number to the result array
    original.push(num);

    // Decrease the counts of the number and its double
    numCount.set(num, numCount.get(num) - 1);
    numCount.set(doubleNum, numCount.get(doubleNum) - 1);
  }

  return original;
}

// Example usage
const changed = [1, 3, 4, 2, 6, 8];
const originalArray = findOriginalArray(changed);
console.log(originalArray);  