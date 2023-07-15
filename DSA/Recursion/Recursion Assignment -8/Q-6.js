// Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc"

function findAnagrams(s, p) {
    const result = [];
    const charCount = new Map();
  
    // Calculate the count of characters in p
    for (let i = 0; i < p.length; i++) {
      const char = p[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    let left = 0; // Left pointer of the sliding window
    let right = 0; // Right pointer of the sliding window
    let count = p.length; // Count of characters remaining to be matched
  
    while (right < s.length) {
      const rightChar = s[right];
  
      // If the current character in s is present in p, decrement the count
      if (charCount.has(rightChar) && charCount.get(rightChar) > 0) {
        count--;
      }
  
      charCount.set(rightChar, (charCount.get(rightChar) || 0) - 1); // Decrement the count for the current character
      right++; // Move the right pointer
  
      // If all characters in p are matched, add the left pointer to the result
      if (count === 0) {
        result.push(left);
      }
  
      // If the window size is equal to p's length, move the left pointer
      if (right - left === p.length) {
        const leftChar = s[left];
  
        if (charCount.has(leftChar) && charCount.get(leftChar) >= 0) {
          count++; // Increment the count since we are excluding a matched character
        }
  
        charCount.set(leftChar, (charCount.get(leftChar) || 0) + 1); // Increment the count for the excluded character
        left++; // Move the left pointer
      }
    }
  
    return result;
  }
  
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); // Output: [0, 6]