// Question 8**

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// Example:
// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  // Initialize the result matrix with zeros
  const result = Array(m).fill(0).map(() => Array(n).fill(0));

  // Perform matrix multiplication
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let x = 0; x < k; x++) {
        result[i][j] += mat1[i][x] * mat2[x][j];
      }
    }
  }

  return result;
}

// Example usage
const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];

const result = multiplySparseMatrices(mat1, mat2);
console.log(result);
