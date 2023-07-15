// Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**
// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

function generateSpiralMatrix(n) {
  // Initialize the matrix with zeros
  const matrix = Array(n).fill(0).map(() => Array(n).fill(0));

  let num = 1; // Current number to fill in the matrix
  let top = 0; // Topmost row index
  let bottom = n - 1; // Bottommost row index
  let left = 0; // Leftmost column index
  let right = n - 1; // Rightmost column index

  while (num <= n * n) {
    // Fill the top row from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;

    // Fill the rightmost column from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;

    // Fill the bottom row from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;

    // Fill the leftmost column from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }

  return matrix;
}

// Example usage
const n = 3;
const spiralMatrix = generateSpiralMatrix(n);
console.log(spiralMatrix);  