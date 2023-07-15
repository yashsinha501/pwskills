// *Question 2**

// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// **Example 1:
// **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// **Output:** true

function searchMatrix(matrix, target) {
    const m = matrix.length; // Number of rows
    const n = matrix[0].length; // Number of columns

    let left = 0;
    let right = m * n - 1; // Treat the matrix as a 1D array for binary search

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / n)][mid % n]; // Convert 1D index to 2D coordinates

        if (midValue === target) {
            return true; // Target found
        } else if (midValue < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return false; // Target not found
}

// Example usage
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result);  