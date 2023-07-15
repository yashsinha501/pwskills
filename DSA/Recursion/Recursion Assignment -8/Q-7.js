// Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

var decodeString = function(s) {
    const stack = []; // Stack to store previous strings and numbers
    let currentStr = ""; // Current string being built
    let num = 0; // Current number being parsed
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === "[") {
        // Opening bracket encountered, push the current string and number to the stack
        stack.push(currentStr);
        stack.push(num);
        currentStr = ""; // Reset the current string
        num = 0; // Reset the current number
      } else if (char === "]") {
        // Closing bracket encountered, decode the string inside the brackets

        const prevNum = stack.pop(); // Get the previous number from the stack
        const prevStr = stack.pop(); // Get the previous string from the stack

        currentStr = prevStr + currentStr.repeat(prevNum); // Repeat the current string and append it to the previous string

      } else if (!isNaN(char)) {
        // Numeric character encountered, update the current number
        num = num * 10 + parseInt(char);
      } else {
        // Regular character encountered, append it to the current string
        currentStr += char;
      }
    }
  
    return currentStr; // Return the decoded string
  };
  
  const s = "3[a]2[bc]";
  console.log(decodeString(s));// Output: "aaabcbc" 