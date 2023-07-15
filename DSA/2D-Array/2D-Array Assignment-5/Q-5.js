// Question 5**

// Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// **Example 1:**

// **Input:** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

// **Output:** 2

// **Explanation:**

// For arr1[0]=4 we have:

// |4-10|=6 > d=2

// |4-9|=5 > d=2

// |4-1|=3 > d=2

// |4-8|=4 > d=2

// For arr1[1]=5 we have:

// |5-10|=5 > d=2

// |5-9|=4 > d=2

// |5-1|=4 > d=2

// |5-8|=3 > d=2

// For arr1[2]=8 we have:

// **|8-10|=2 <= d=2**

// **|8-9|=1 <= d=2**

// |8-1|=7 > d=2

// **|8-8|=0 <= d=2

const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;

function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (const num1 of arr1) {
      let found = false;
  
      for (const num2 of arr2) {
        if (Math.abs(num1 - num2) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        distance++;
      }
    }
  
    return distance;
  }
  
  console.log(distanceValue(arr1, arr2, d));
  