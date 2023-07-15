// Question 2**

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// </aside>
// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

// **Example 1:**
// **Input:** n = 5

// **Output:** 2

// **Explanation:** Because the 3rd row is incomplete, we return 2.


function countCompleteRows(n) {
    let completeRows = 0;
    let i = 1;
  
    while (n >= i) {
      n -= i;
      completeRows++;
      i++;
    }
  
    return completeRows;
  }
  
  // Example usage:
  const n = 5;
  const result = countCompleteRows(n);
  console.log(result);  