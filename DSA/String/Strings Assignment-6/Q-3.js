// Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

function isValidMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  // Find the peak
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Check if the peak is not the first or last element
  if (i === 0 || i === n - 1) {
    return false;
  }

  // Check if the descending order starts from the peak
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
}

// Example usage
const arr = [0, 3, 2, 1];
const isValid = isValidMountainArray(arr);
console.log(isValid);  