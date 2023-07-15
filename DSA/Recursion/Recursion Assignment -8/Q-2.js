// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**
// true

let maxCount , minCount = 0;
let s = '()'
function checkValidParenthesis(s) {
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        minCount++;
        maxCount++;
      } else if(s[i] === ')') {
        if (minCount > 0) {
            minCount--;
          }
          maxCount--;
      } else {
        if (minCount > 0) {
            minCount--;
          }
          maxCount--;
      }

      if (maxCount < 0) {
          return false;
      } 
    }
    return minCount === 0;
}

console.log(checkValidParenthesis(s));