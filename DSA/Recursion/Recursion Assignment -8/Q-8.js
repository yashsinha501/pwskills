// Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal

const buddyStrings = function (A, B) {
    // If the lengths of A and B are different, they cannot be buddy strings
    if (A.length !== B.length) return false;
  
    if (A === B) {
      // Array to store the count of characters in A
      const charCount = new Array(26).fill(0);
      for (let i = 0; i < A.length; i++) {
        // Increment the count of the character at index i
        charCount[A.charCodeAt(i) - 97]++;
  
        // If a character is repeated, it is possible to swap and form buddy strings
        if (charCount[A.charCodeAt(i) - 97] > 1) return true;
      }
      return false;
    } else {
      // Array to store the differing indices between A and B
      const diffIndices = [];
      for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
          // Store the index where characters differ
          diffIndices.push(i);
  
          // If more than 2 differing indices, not possible to form buddy strings
          if (diffIndices.length > 2) return false;
        }
      }
  
      // If exactly 2 differing indices not found, not possible to form buddy strings
      if (diffIndices.length !== 2) return false;
      return (
        // Check if swapping characters at differing indices results in equal strings
        A[diffIndices[0]] === B[diffIndices[1]] &&
        A[diffIndices[1]] === B[diffIndices[0]]
      );
    }
  };
  const s = "ab";
  const goal = "ba";
  console.log(buddyStrings(s, goal)); //Output:true