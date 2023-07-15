// Question 5**

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

// - If the group's length is 1, append the character to s.
// - Otherwise, append the character followed by the group's length.

// The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done **modifying the input array,** return *the new length of the array*.

// You must write an algorithm that uses only constant extra space.

// **Example 1:**

// **Input:** chars = ["a","a","b","b","c","c","c"]

// **Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// **Explanation:**

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3"

const compress = function (chars) {
    let i = 0; // Pointer for the current character being processed
    let count = 1; // Count of consecutive repeating characters
    let compressedIndex = 0; // Index for storing compressed characters in the original array
  
    function compressHelper() {
      if (i === chars.length) return compressedIndex; // Base case: reached the end of the array
  
      // Check if the current character is the same as the next character
      if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
        count++; // Increment the count for consecutive repeating characters
      } else {
        // Append the compressed character and its count to the original array
        chars[compressedIndex++] = chars[i];
        if (count > 1) {
          const countChars = count.toString().split("");
          for (const char of countChars) {
            chars[compressedIndex++] = char;
          }
        }
        count = 1; // Reset the count for the next group of consecutive repeating characters
      }
  
      i++; // Move to the next character in the array
      return compressHelper(); // Recursively process the remaining characters
    }
  
    return compressHelper();
  };
  
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  console.log(newLength); // Output: 6
  console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]