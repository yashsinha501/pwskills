// Question 3**
// Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// **Example 1:**

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]


const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];

    for (let i = 0; i < cols; i++) {
        const row = [];

        for (let j = 0; j < rows; j++) {
            row.push(matrix[j][i]);
        }
        
        transposedMatrix.push(row);
    }

    return transposedMatrix;
}

console.log(transposeMatrix(matrix));  